const JsxLite = {
  createComponent(Component, props, ...children) {
    let elementProps = '';

    if (props) {
      const { className, ...rest } = props;
      if (className) elementProps += ` class="${className}"`;
    }

    if (typeof (Component) === 'string') {
      return `<${Component}${elementProps}>${children.join('')}</${Component}>`;
    }

    return '';
  },
  Fragment() {
    return 'JsxLite.Fragment';
  },
};

export default JsxLite;
