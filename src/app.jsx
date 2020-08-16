import JsxLite from './jsx-lite';

var Hello = ({children}) => (<>{children}</>);

var app = (
  <Hello>
    <div>Hi</div>
    <span>Who are you?</span>
  </Hello>
);

document.getElementById("root").innerHTML = app;
