# Community Starter Kit

This file contains the course flow for the "Protected Branches and CODEOWNERS" course.

### User Registration
- Before registration, a description of the class and the recommended prerequistes will be available.
- On registration, the app will create a repository for the user based on [this template](http://github.com/githubtraining/intro-to-html).
- Once the repository is created, the app will [create an issue with the first set of instructions](responses/01_welcome.md).  

## Activity 1: Creating your webpage

| Student action | App response |
| -------------- | ------------ |
| student enables GitHub Pages | App responds with response on initial issue [using](responses/00-openapr.md) |
| student creates a PR using `base: master` and `compare: add-index`. | app responds on PR [with](responses/02-html-structure.md) |
| student modifies the html file based on instructions | app responds [with](responses/03-title-tag.md), if student didn't add an `<html>` or `<body>` (and closing tags) respond [with](responses/03e-add-html.md) |
|  student adds `<title>` tag | app responds [with](responses/04-merge-first-pr.md), if error on `title` tag addition, [use](responses/03e-add-title.md) |
| student merges PR | app creates issue [using](responses/05-h1-tag.md) |

## Activity 2: Adding initial content to your webpage

| Student action | App response |
| -------------- | ------------ |
| student creates a PR based on the new issue | if `<h1>` tags don't exist, [use](responses/05e-troubleshoot-h1.md) , if `<h1>` tags exist, [use](responses/06-add-image.md) |
| student adds an image to the site | on fail app uses [this](responses/06e_image.md) ; on success app uses [this](responses/07_merge-second-pr.md) |
| student merges PR | app creates Issue [with](responses/08-create-list.md) | 

## Activity 3: Adding lists and links to your webpage 

| Student action | App response |
| -------------- | ------------ |
| student creates PR based on issue | app responds [with](responses/09-add-links.md) , on fail [use](responses/08e-list.md)  |
| student adds links to the list | on fail app uses [this](responses/09e-links.md) ; on success app uses [this](responses/10-merge-third-pr.md) |
| student merges PR | app merges the add-style branch in the background, creates an issue [with](responses/11-link-css.md)   |
