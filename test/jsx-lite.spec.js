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

    describe('When given props', () => {
      it('Should only show its id, class, and style', () => {
        const Test = <div id="testId" className="testClass" style="color: red;" test="test" />;
        expect(Test).toBe('<div id="testId" class="testClass" style="color: red;"></div>')
      });
    });

    it('Should work with children and props', () => {
      const Test = (
        <div id="testId" className="testClass" test="test">
          <div></div>
          <div></div>
        </div>
      );

      expect(Test).toBe('<div id="testId" class="testClass"><div></div><div></div></div>')
    })
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