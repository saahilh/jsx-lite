# jsx-lite
A babel-based tool that will serve as a lightweight transpiler from jsx to html. 

I wanted to try going from jsx to HTML in an effort to learn how to make DSLs using JavaScript.
The goal will be to do this without using React and ReactDOM.
For now, this uses plugin-transform-react-jsx to handle conversions from jsx to method calls.
The logic in it is primarily taking the argument from that method call and making corresponding html elements.
So in the transformation of jsx -> js -> html, I am currently working on the js -> html step.

# Instructions
    * Clone local copy of repository
    * To setup `npm install`
    * To test, `npm run test`
    * To run transformation on the example in app.jsx, `npm run build`. This will create the output dist/bundle.js that will be loaded in by index.html.