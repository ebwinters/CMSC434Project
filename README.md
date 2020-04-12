# CMSC434Project

## Getting started
### Getting the repo and contributing to the source
1. Make a fork of the repo ![info on that here](https://help.github.com/en/enterprise/2.13/user/articles/fork-a-repo)
2. Write your code
3. Make a pull request

**always before you start coding, in your terminal in the folder of the project, type `git fetch upstream  && git pull upstream master` to get the most current changes`**
### Making a custom branch
1. In the folder you just cloned, enter the command `git checkout -b my_new_branch` but instead of "my_new_branch" make the branch name the name of the feature you are making. i.e. `home_page`. 
## Standards
### Tabs & Spacing
- Each tab is 4 spaces
### Styles
#### Fonts
- Verdana family
#### Sizing
- When adjusting font size using CSS, we will use the following scale:
    - XS: 6px
    - S: 8px
    - M: 11px
    - L: 14px
    - XL: 35px
    - Title: 50px
#### Colors
- Here is the pallette we are using: https://coolors.co/e8f1f2-000000-ea2e2e-f9e572-000000
- Background light, text dark, red primary, yellow secondary
#### Github
- Be sure you are making commits on your local branch every time you write any block of code over 10 lines
- Make commit messages one sentence but be descriptive of what you are commiting
- Be sure to push to Github after working on your code. This ensures you have a backup of your work
### Merging a feature
Once you are done working on your feature, inside of your separate branch, you need to merge it into the master branch so everyone else can pull the changes and work with the updated website. To do this:
1. Make sure you have pushed everything to your branch, so when you type `git status` the terminal says "everything is up to date"
2. `git checkout master`
3. `git pull`
4. `git merge branch_name`
### Naming
- Homescreen and visitor/student/faculty screens will be called `homescreen`, `visitor_home`, `student_home`, and `faculty_home` respectively
- Feature pages and css/js files associated with the feature page should be named according to your feature. For example, for the "book a study space" feature, the landing page where you select to look at open rooms or book a room could be called "studyspace_home", and the page where you view the open rooms could be called "open_room", and booking a room could be "book_room".

## Adding a new page for your feature
Notice that the homepage has `<a>` tags as the routing mechanism. 
Now, for example, say I want to add the FAQ page for visitors. I would do the following:
1. Find the file under the pages folder for the visitor screen (see naming conventions section to know which file this is)
2. Find the `<a>` tag with the placeholder text for the FAQ feature. Should look like:
```html
<a>FAQ</a>
```
3. Replace it with:
```html
<a href="pages/visotor/faq">FAQ</a>
```
4. In the visitor folder of the pages folder in the project create a file called `faq.html`
5. Inside of this html file, enter this starter code:
```html
<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <title>Template Page</title>
    <link rel="stylesheet" href="../css/grid.css">
    <link rel="stylesheet" href="../css/visitor/faq.css">
</head>

<body>
</body>

<script src="../js/visitor/faq.js"></script>
<script src="../js/general_functions.js"></script>

</html>
```
Notice the CSS grid stylesheet is included in the file. This is because we will have some global css styles to maintain internal consistency

6. In the visitor folder of the css folder in the project create a file called `faq.css`
7. In the visitor folder of the js folder in the project create a file called `faq.js`

## Using our custom grid layout in your feature
