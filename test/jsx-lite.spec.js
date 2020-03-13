import JsxLite from '../src/jsx-lite';

describe('createComponent', () => {
  it('Should be a function', () => {
    expect(JsxLite.createComponent).toBeInstanceOf(Function);
  });

  describe('When called with primitive html types', () => {
    it('Should work without children or props', () => {
      const Test = <div />;
      expect(Test).toBe('<div></div>')
    });

    it('Should work with children', () => {
      const OneChildTest = (
        <div>
          <div></div>
        </div>
      );

      expect(OneChildTest).toBe('<div><div></div></div>');

      const TwoChildTest = (
        <div>
          <div></div>
          <div></div>
        </div>
      );

      expect(TwoChildTest).toBe('<div><div></div><div></div></div>')
    });
  });
});

describe('Fragment', () => {
  it('Should be a function', () => {
    expect(JsxLite.Fragment).toBeInstanceOf(Function);
  });

  it('Should return JsxLite.Fragment', () => {
    expect(JsxLite.Fragment()).toBe('JsxLite.Fragment');
  });
})