I didn't detect opening and closing `head` and `title` tags. Here are some troubleshooting steps:

1. Check your spelling. We're checking specifically for the tags: `<head>`, `<title>`, `</title>`, and `</head>`.
2. Check the order of your tags. The opening `<head>` tag should appear first, followed by the opening `<title>` tag, then the title itself, the closing `</title>` tag, and the closing `</head>` tag.
3. Make sure you placed the head and title tags after the `<html>` tag, but before the `<body>` tag.
4. Ensure you modified the `index.html` file, and not some other file. 

Let's try again!

### :keyboard: Activity: Give your page a title

1. Click on **Files Changed**.
1. Click on the ellipsis (...) and select **Edit file**.
1. Place an opening `<head>` tag and an opening `<title>` tag after the first opening HTML tag, but before the body tag.
1. Write out a title after the opening title tag.
1. Place a closing `</title>` tag and a closing `</head>` tag after your new title, but before the body tag. 
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Commit directly to the `add-index` branch_.
1. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>