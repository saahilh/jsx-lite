# jsx-lite
A babel-based tool that will serve as a lightweight transpiler from jsx to html. 

![Image of browser-based editor](https://raw.githubusercontent.com/saahilh/jsx-lite/master/img/jsxlite-demo.PNG)

# Description
I wanted to try going from jsx to HTML in an effort to learn how to make DSLs using JavaScript.
For now, this uses plugin-transform-react-jsx to handle conversions from jsx to method calls.
So in the transformation of jsx -> js -> html, I am currently working on the js -> html step.

# Instructions
* Console
    * Clone local copy of repository
    * To setup `npm install`
    * To test, `npm run test`
    * To run transformation on the example in src/app.jsx, `npm run build`. This will create the output dist/bundle.js that will be loaded in by the templated index.html.
        * The root file to add jsx code is src/app.jsx.
        * The webpage produced can be seen by opening build.html in a browser.
* Browser-based example (see image above, with 'jsx-playground')
    * To setup, `npm install`
    * Open index.html (temporary until I get the project onto my personal website)

# TODO
* Follow the approach outlined here when setting up on website:
    * https://security.stackexchange.com/questions/173096/what-are-the-security-measures-taken-on-websites-that-allow-online-scripting-suc