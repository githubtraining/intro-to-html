You may be wondering why your page hasn't looked exactly the same as the sample I showed in the beginning. That's because HTML gives your webpage structure, but the simple tags you have learned so far don't tell the web browser how you want each page element to appear. 

The appearance of each page element is defined through styles and is the subject of another course. For now, I have added a stylesheet for you. You can check it out here: https://github.com/{{ user.username }}/{{ repo }}/blob/master/style.css 

For your webpage to use your new stylesheet, you just need to link it within the `<head>` of your `index.html` file. If you include the following link in your `index.html` file, your webpage will begin using the css file to make your website look awesome!

```
  <link rel="stylesheet" href="styles.css">
```

As an example, your `index.html` file might look like this:

```
    <head>
        <title>I am a title!</title>
        <link rel="stylesheet" href="styles.css">
    </head>
```

### Your finished page

And here is the finished result: https://{{user.username}}.github.io/{{repo}}/

You've learned the basics of HTML, and used it to build a simple webpage. If you'd like, you can make your fancy new page the default start page for your web browser. Just follow the links below for more information:

- [Google Chrome](https://support.google.com/chrome/answer/95314?hl=en)
- [Safari](https://support.apple.com/guide/safari/set-your-homepage-ibrw1020/mac)
- [Firefox](https://support.mozilla.org/en-US/kb/how-to-set-the-home-page)
- [Microsoft Edge](https://support.microsoft.com/en-us/help/4027577/windows-change-your-home-page)
