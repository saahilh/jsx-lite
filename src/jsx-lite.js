const JsxLite = {
  createComponent(Component, props, ...children) {
    const isPrimitiveElement = typeof (Component) === 'string';

    if (isPrimitiveElement) {
      let elementProps = '';

      if (props) {
        const { className, id } = props;

        if (id) elementProps += ` id="${id}"`;
        if (className) elementProps += ` class="${className}"`;
      }

      return `<${Component}${elementProps}>${children.join('')}</${Component}>`;
    }

    return '';
  },
  Fragment() {
    return 'JsxLite.Fragment';
  },
};

export default JsxLite;
