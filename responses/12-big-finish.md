### Show the world your finished page

Well done @{{ user.username }}, here is the finished result: {{ pagesUrl }}

You've learned the basics of HTML, and used it to build a simple webpage. 

Though this works, there's still more you can do to make sure you're up to date with standard conventions, like using an HTML validator.

{% if GHE_HOST %}
<h3 align="center"><a href="https://validator.w3.org/nu/?showsource=yes&doc=https://pages.{{ GHE_HOST }}/{{ user.login }}/{{ repo }}/">See validation</a></h3>
{% else %}
<h3 align="center"><a href="https://validator.w3.org/nu/?showsource=yes&doc=https://{{ user.login }}.github.io/{{ repo }}">See validation</a></h3>
{% endif %}


If you'd like, you can make your fancy new page the default start page for your web browser. Just follow the links below for more information:

- [Google Chrome](https://support.google.com/chrome/answer/95314?hl=en)
- [Safari](https://support.apple.com/guide/safari/set-your-homepage-ibrw1020/mac)
- [Firefox](https://support.mozilla.org/en-US/kb/how-to-set-the-home-page)
- [Microsoft Edge](https://support.microsoft.com/en-us/help/4027577/windows-change-your-home-page)
