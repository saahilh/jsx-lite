const JsxLite = {
  createComponent(Component, props, ...children) {
    const isPrimitiveElement = typeof (Component) === 'string';

    if (isPrimitiveElement) {
      let elementProps = '';

      if (props) {
        const { className, id, style } = props;

        if (id) elementProps += ` id="${id}"`;
        if (className) elementProps += ` class="${className}"`;
        if (style) elementProps += ` style="${style}"`;
      }

      return `<${Component}${elementProps}>${children.join('')}</${Component}>`;
    }

    return Component();
  },
  Fragment() {
    return 'JsxLite.Fragment';
  },
};

export default JsxLite;
