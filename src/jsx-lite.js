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
        if (props.style) elementProps += ` style="${props.style}"`;
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

export default JsxLite;
