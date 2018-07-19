# Give your page a title

Your web page is beginning to take shape! HTML and body tags are important, but their effect isn't too visible. Next, we'll make a visible change, by giving your page a title. Your page's title will show up on the title bar in your web browser, or as the title of any tabs you've got open. The title is used in all sorts of other places!

![a screenshot of the title on a browser tab](https://user-images.githubusercontent.com/16547949/41006294-e990b476-68ee-11e8-8cfa-67c72c132095.png)

The title tag looks like this:

```html
<title>I am a title!</title>
```

But the title tag must be inside of a head tag. By now, you've noticed that tags have a hierarchical structure. In our prior example, the `html` tag was the parent of the `body` tag. In a similar fashion, the `head` tag will be the parent of the `title` tag, like so:

```html
<head>
    <title>I am a title!</title>
</head>
```

Finally, the `head` and `title` tags, will be children of the `html` tag, but siblings of the `body` tag.

```html
<html>
    <head>
        <title>I am a title!</title>
    </head>

    <body>
        Some content.
    </body>
</html>
```

### :keyboard: Activity: Give your page a title

1. Click on **Files Changed**.
1. Click on the :pencil: to edit the file.
1. Place an opening `<head>` tag and an opening `<title>` tag after the first opening `html` tag, but before the `body` tag.
1. Write out a title after the opening `title` tag.
1. Place a closing `</title>` tag and a closing `</head>` tag after your new title, but before the `body` tag. 
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Commit directly to the `add-index` branch_.
1. Click on **Commit changes**.