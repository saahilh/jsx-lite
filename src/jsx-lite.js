const JsxLite = {
  createComponent(Component, props, ...children) {
    if (typeof (Component) === 'string') {
      return `<${Component}>${children.join('')}</${Component}>`;
    }

    return '';
  },
  Fragment() {
    return 'JsxLite.Fragment';
  },
};

export default JsxLite;
