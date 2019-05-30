## Step 12: Make it beautiful

You may be wondering why your page hasn't looked exactly the same as the sample I showed in the beginning. That's because HTML gives your webpage structure, but the simple tags you have learned so far don't tell the web browser how you want each page element to appear. 

The appearance of each page element is defined through styles and is the subject of another course. For now, I have added [a stylesheet]({{ repoUrl }}/blob/add-style/style.css) for you. 

For your webpage to use your new stylesheet, you just need to link it within the `<head>` of your `index.html` file. If you include the following link in your `index.html` file, your webpage will begin using the css file to make your website look awesome!

```html
  <link rel="stylesheet" href="style.css">
```

As an example, your `index.html` file might look like this:

```html
    <head>
        <title>I am a title!</title>
        <link rel="stylesheet" href="style.css">
    </head>
```

### :keyboard: Activity: Create a style to your site

1. Edit the `index.html` file in the `add-style` branch by [using this direct link]({{ repoUrl }}/edit/add-style/index.html) or going to the **Code** tab, selecting the `add-style` branch, clicking on the `index.html` file, and clicking the pencil :pencil: to edit.
1. Between the `<head>` tags, add the following `<link rel="stylesheet" href="style.css">`.
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>