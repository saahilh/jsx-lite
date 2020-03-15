import JsxLite from '../src/jsx-lite';

describe('createComponent', () => {
  it('Should be a function', () => {
    expect(JsxLite.createComponent).toBeInstanceOf(Function);
  });

  describe('When called with primitive html types', () => {
    it('Should work without children or props', () => {
      const EmptyPrimitiveTest = <div />;
      expect(EmptyPrimitiveTest).toBe('<div></div>')
    });

    it('Should work with children', () => {
      const OneChildPrimitiveTest = (
        <div>
          <div></div>
        </div>
      );

      expect(OneChildPrimitiveTest).toBe('<div><div></div></div>');

      const TwoChildPrimitiveTest = (
        <div>
          <div></div>
          <div></div>
        </div>
      );

      expect(TwoChildPrimitiveTest).toBe('<div><div></div><div></div></div>')
    });

    describe('When given props', () => {
      it('Should only show its id, class, and style', () => {
        const AllPropsPrimitiveTest = (
          <div id="testId" className="testClass" style="color: red;" test="test" />
        );

        expect(AllPropsPrimitiveTest).toBe('<div id="testId" class="testClass" style="color: red;"></div>')
      });
    });

    it('Should work with children and props', () => {
      const FullPrimitiveTest = (
        <div id="testId" className="testClass" test="test">
          <div></div>
          <div></div>
        </div>
      );

      expect(FullPrimitiveTest).toBe('<div id="testId" class="testClass"><div></div><div></div></div>')
    });  
  });

  describe('When called with custom components', () => {
    it('Should work without children or props', () => {
      const EmptyCustomTestComponent = () => (
        <div />
      );

      const EmptyCustomTest = (
        <EmptyCustomTestComponent />
      );

      expect(EmptyCustomTest).toBe('<div></div>');
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