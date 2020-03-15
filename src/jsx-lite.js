const JsxLite = {
  createComponent(Component, props, ...children) {
    const isPrimitiveElement = typeof (Component) === 'string';

    if (isPrimitiveElement) {
      let elementProps = '';

      if (props) {
        if (props.id) elementProps += ` id="${props.id}"`;
        if (props.class) elementProps += ` class="${props.class}"`;
        if (props.style) elementProps += ` style="${props.style}"`;
      }

      return `<${Component}${elementProps}>${children.join('')}</${Component}>`;
    }

    if (children) {
      return Component({ ...props, children: children.join('') });
    }

    return Component(props);
  },
  Fragment() {
    return 'JsxLite.Fragment';
  },
};

export default JsxLite;
