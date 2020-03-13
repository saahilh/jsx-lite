const JsxLite = {
  createComponent(Component, props, ...children) {
    if (typeof (Component) === 'string') {
      return `<${Component}></${Component}>`;
    }

    return '';
  },
  Fragment() {
    return 'JsxLite.Fragment';
  },
};

export default JsxLite;
