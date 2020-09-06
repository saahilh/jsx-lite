// Checks if input argument is an object but not an array
const isObject = (obj) => (obj === Object(obj) && Object.prototype.toString.call(obj) !== '[object Array]');
const camelCaseToCSS = (str) => (
    str.replace(/\d+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join('-')
);

const getStyle = (inputStyle) => {
  if (typeof inputStyle === 'string') {
    return inputStyle;
  } else if (isObject(inputStyle)) {
    const styleObjectAsString = Object.entries(inputStyle).reduce((styleObjectAsString, [key, val]) => {
      return styleObjectAsString + `${camelCaseToCSS(key)}: ${val};`;
    }, "");

    return styleObjectAsString;
  } else {
    return null;
  }
};

const JsxLite = {
  createComponent(Component, props, ...children) {
    const isFragment = !Component;
    if (isFragment) {
      return children ? children.join('') : '';
    }

    const isPrimitiveElement = typeof (Component) === 'string';

    if (isPrimitiveElement) {
      let elementProps = '';

      if (props) {
        if (props.id) elementProps += ` id="${props.id}"`;
        if (props.class) elementProps += ` class="${props.class}"`;
        if (props.style) {
          const style = getStyle(props.style);
          if (style) {
            elementProps += ` style="${style}"`;
          }
        }
      }

      return `<${Component}${elementProps}>${children.join('')}</${Component}>`;
    }

    if (children) {
      return Component({ ...props, children: children.join('') });
    }

    return Component(props);
  },
  Fragment({ children, ...props }) {
    return JsxLite.createComponent(undefined, props, children);
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = JsxLite
}
