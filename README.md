# CMSC434Project

## Getting started
### Cloning the repository
1. `git clone https://github.com/ebwinters/CMSC434Project.git`
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
    - XL: 18px
#### Colors
- Here is the pallette we are using: https://coolors.co/e8f1f2-000000-ea2e2e-f9e572-000000
- Background light, text dark, red primary, yellow secondary
### Merging
### Naming

## Adding a new page for your feature
Notice that the homepage has `<a>` tags as the routing mechanism. 
Now, for example, say I want to add the FAQ page for visitors. I would do the following:
1. Find the file under the pages folder for the visitor homescreen (see naming conventions section to know which file this is)
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
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/visitor/faq.css">
</head>

<body>
</body>

<script src="js/visitor/faq.js"></script>

</html>
```
Notice the CSS grid stylesheet is included in the file. This is because we will have some global css styles to maintain internal consistency

6. In the visitor folder of the css folder in the project create a file called `faq.css`
7. In the visitor folder of the js folder in the project create a file called `faq.js`

## Using our custom grid layout in your feature
