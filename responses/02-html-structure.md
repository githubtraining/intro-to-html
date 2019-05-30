## Step 3: Add HTML document structure

Great job opening a pull request @{{ user.username }}! I've gone ahead and closed your [previous issue]({{ welcomeLink }}). 

This pull request contains some content, but it doesn't have any of the HTML structure that tells a browser how to structure the content. All pages created with HTML must contain tags that identify it as such. The tags look like this:

```html
<html>
    <body>
        The HTML content goes here.
    </body>
</html>
```

You may notice two copies of the HTML tag, and two copies of the body tag. We call these the _opening_ and _closing_ tags. Let's look at the same code, but include a little explanation.

- `<html>` is the opening HTML tag
- `<body>` is the opening body tag
- `</body>` is the closing body tag
- `</html>` is the closing HTML tag

In HTML, spacing doesn't really matter. We've added some tabs to make the code easier to see, but the web browser will ignore the extra spacing. Now that you understand the building blocks of HTML, let's add HTML to the `index.html` file in your project.

### :keyboard: Activity: Add the `html` and `body` tags to `index.html`

Apply this suggested change, or follow the instructions below if you'd like to type out the code manually.

```suggestion
<html>

  <body>
    Hello there, awesome person! 
  </body>

</html>
```

1. Click on **Files Changed** to see the newly added `index.html` file.
1. Click on the :pencil: to edit the file.
1. Before the existing content, add an opening `<html>` tag, and an opening `<body>` tag.
1. After the existing content, add a closing `</body>` tag, and a closing `</html>` tag.
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Commit directly to the `add-index` branch_.
1. Click on **Commit changes**.

<hr>
<h3 align="center">Watch below for my response</h3>