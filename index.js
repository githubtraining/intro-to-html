const html = require('html-parse-stringify')

function checkHTMLForTag (string, type) {
  const ast = html.parse(string.replace(/\n$/g, ''))
  return hasType(ast, type)
}
function hasType (objects, type) {
  return objects.some(o => {
    if (o.hasOwnProperty('name') && o.name === type) {
      return true
    } else if (o.hasOwnProperty('children')) {
      return hasType(o.children, type)
    } else {
      return false
    }
  })
}

async function getBlobFromHeadCommit (context, filename) {
  if (!context) throw new Error('You need a context!')

  // get the tree at head commit
  const tree = await context.github.gitdata.getTree(context.repo({
    sha: context.payload.pull_request.head.sha,
    recursive: 1
  }))

  context.log(`the root tree: ${JSON.stringify(tree, null, 2)}`)

  const file = tree.data.tree.find(file => file.path === filename)

  context.log(`the file: ${file}`)
  context.log(`The file sha is ${file.sha}`)

  const blob64 = await context.github.gitdata.getBlob(context.repo({
    sha: file.sha
  }))

  return Buffer.from(blob64.data.content, 'base64').toString()
}

async function mergeHandler (context, yes, no) {
  if (context.payload.pull_request.merged) {
    return context.respond(yes)
  } else {
    await context.respond(no)
    return false
  }
}

module.exports = course => {
  course.before(async context => {
    await context.github.repos.updateBranchProtection(context.repo({
      branch: 'master',
      required_status_checks: null,
      enforce_admins: true,
      required_pull_request_reviews: {},
      restrictions: null
    }))

    return context.newIssue({
      title: 'Welcome to Intro to HTML!',
      body: context.fromFile('01-welcome.md', context.repo())
    })
  })

  course.on('turn-on-github-pages', async context => {
    const issues = await context.github.issues.getForRepo(context.repo({
      state: 'all'
    }))
    const welcomeIssue = issues.data.find(issue => issue.title === 'Welcome to Intro to HTML!')

    course.log(`welcome issue? ${welcomeIssue}`)

    if (welcomeIssue) {
      return context.github.issues.createComment(context.repo({
        number: welcomeIssue.number,
        body: context.fromFile('00-openapr.md', context.repo())
      }))
    }

    return false
  })

  course.on('open-a-pull-request', async context => {
    course.log('Detected an open PR')

    const issues = await context.github.issues.getForRepo(context.repo({
      state: 'all'
    }))
    const welcomeIssue = issues.data.find(issue => issue.title === 'Welcome to Intro to HTML!')

    course.log(`welcome issue? ${welcomeIssue.html_url}`)

    if (welcomeIssue) {
      await context.github.issues.edit(context.repo({
        number: welcomeIssue.number,
        state: 'closed'
      }))

      return context.respond(context.fromFile('02-html-structure.md', { welcomeLink: welcomeIssue.html_url }))
    }

    return false
  })

  course.on('build-the-html-document-structure', async context => {
    const blob = await getBlobFromHeadCommit(context, 'index.html')

    course.log(`The blob: ${blob}`)

    if (checkHTMLForTag(blob, 'html') && checkHTMLForTag(blob, 'body')) {
      return context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('03-title-tag.md'),
        event: 'COMMENT'
      }))
    } else {
      await context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('03e-add-html.md'),
        event: 'REQUEST_CHANGES'
      }))

      return false
    }
  })

  course.on('add-a-title-tag', async context => {
    const blob = await getBlobFromHeadCommit(context, 'index.html')

    if (checkHTMLForTag(blob, 'head') && checkHTMLForTag(blob, 'title')) {
      return context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('04-merge-first-pr.md'),
        event: 'APPROVE'
      }))
    } else {
      await context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('03e-add-title.md'),
        event: 'REQUEST_CHANGES'
      }))

      return false
    }
  })

  course.on('merge-your-first-pull-request', async context => {
    return mergeHandler(context, context.fromFile('05-h1-tag.md', context.repo()), 'no')
  })

  course.on('change-your-username-to-an-h1-tag', async context => {
    if (context.payload.action !== 'opened' && context.payload.action !== 'synchronize') {
      course.log('Didn\'t open or synch, exiting')
      return false
    }

    course.log(`the user: ${JSON.stringify(context.repo())}`)

    const blob = await getBlobFromHeadCommit(context, 'index.html')
    if (checkHTMLForTag(blob, 'h1')) {
      const user = await context.github.users.getForUser({username: context.repo().owner})

      course.log(`user: ${JSON.stringify(user)}`)

      return context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('06-add-image.md', {avatar: user.data.avatar_url}),
        event: 'COMMENT'
      }))
    } else {
      await context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('05e-troubleshoot-h1.md'),
        event: 'REQUEST_CHANGES'
      }))
    }

    return false
  })

  course.on('add-an-image', async context => {
    const blob = await getBlobFromHeadCommit(context, 'index.html')

    if (checkHTMLForTag(blob, 'img')) {
      return context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('07-merge-second-pr.md'),
        event: 'APPROVE'
      }))
    } else {
      const user = await context.github.users.getForUser({username: context.repo().owner})

      await context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('06e-image.md', {avatar: user.data.avatar_url}),
        event: 'REQUEST_CHANGES'
      }))
    }
    return false
  })

  course.on('merge-your-second-pull-request', async context => {
    return mergeHandler(context, context.fromFile('08-create-list.md', context.repo()), 'no')
  })

  course.on('create-a-list', async context => {
    if (context.payload.action !== 'opened' && context.payload.action !== 'synchronize') {
      course.log('Didn\'t open or synch, exiting')
      return false
    }

    const blob = await getBlobFromHeadCommit(context, 'index.html')

    if (checkHTMLForTag(blob, 'ul') || checkHTMLForTag(blob, 'ol')) {
      return context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('09-add-links.md', context.repo()),
        event: 'COMMENT'
      }))
    } else {
      await context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('08e-list.md'),
        event: 'REQUEST_CHANGES'
      }))

      return false
    }
  })

  course.on('add-links', async context => {
    const blob = await getBlobFromHeadCommit(context, 'index.html')

    if (checkHTMLForTag(blob, 'a')) {
      return context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('10-merge-third-pr.md'),
        event: 'APPROVE'
      }))
    } else {
      await context.github.pullRequests.createReview(context.repo({
        number: context.payload.number,
        body: context.fromFile('09e-links.md'),
        event: 'REQUEST_CHANGES'
      }))

      return false
    }
  })

  course.on('merge-your-third-pull-request', async context => {
    if (context.payload.pull_request.merged) {
      const blob = await getBlobFromHeadCommit(context, 'index.html')
      const newBlob = blob.replace(/<head>/, '<head><link rel="stylesheet" type="text/css" href="style.css">')
      course.log(`New blob after replacement: ${newBlob}`)

      // await context.github.repos.removeBranchProtection(context.repo({
      //   branch: 'master'
      // }))

      const rootTree = await context.github.gitdata.getTree(context.repo({
        sha: context.payload.pull_request.head.sha
      }))

      const file = rootTree.data.tree.find(file => file.path === 'index.html')

      course.log(`the file: ${JSON.stringify(file, null, 2)}`)

      course.log(`The file sha is ${file.sha}`)

      const encodedBlob = Buffer.from(newBlob).toString('base64')

      await context.github.repos.removeBranchProtection(context.repo({
        branch: 'master'
      }))

      await context.github.repos.merge(context.repo({
        base: 'master',
        head: 'add-style'
      }))

      await context.github.repos.updateFile(context.repo({
        path: 'index.html',
        message: 'add stylesheets',
        content: encodedBlob,
        sha: file.sha
      }))

      return context.respond(context.fromFile('11-link-css.md', context.repo()))
    } else {
      await context.respond('no')
    }

    return false
  })
}
