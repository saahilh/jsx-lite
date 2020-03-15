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
          <div id="testId" class="testClass" style="color: red;" test="test" />
        );

        expect(AllPropsPrimitiveTest).toBe('<div id="testId" class="testClass" style="color: red;"></div>')
      });
    });

    it('Should work with children and props', () => {
      const FullPrimitiveTest = (
        <div id="testId" class="testClass" test="test">
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

    it('Should work with children', () => {
      const CustomComponentWithChildren = ({ children }) => (
        <div>
          {children}
        </div>
      );

      const NoChildCustomComponentWithChildrenTest = (
        <CustomComponentWithChildren />
      );

      expect(NoChildCustomComponentWithChildrenTest).toBe('<div></div>');

      const OneChildCustomComponentWithChildrenTest = (
        <CustomComponentWithChildren>
          <div></div>
        </CustomComponentWithChildren>
      );

      expect(OneChildCustomComponentWithChildrenTest).toBe('<div><div></div></div>');

      const TwoChildCustomTestComponentWithChildren = () => (
        <CustomComponentWithChildren>
          <div></div>
          <div></div>
        </CustomComponentWithChildren>
      );

      const TwoChildCustomComponentWithChildrenTest = (
        <TwoChildCustomTestComponentWithChildren />
      );
      
      expect(TwoChildCustomComponentWithChildrenTest).toBe('<div><div></div><div></div></div>')
    });

    it('Should work with props passed on to primitive component', () => {
      const CustomTestComponentWithPropsPassedToPrimitive = ({ id, className, style }) => (
        <div id={id} class={className} style={style} />
      );

      const CustomComponentWithPropsPassedToPrimitiveTest = (
        <CustomTestComponentWithPropsPassedToPrimitive
          id="testId"
          className="testClass"
          style="color: red;"
        />
      );

      expect(CustomComponentWithPropsPassedToPrimitiveTest).toBe('<div id="testId" class="testClass" style="color: red;"></div>')
    });

    it('Should work with children', () => {
      const CustomComponent = ({ children }) => (
        <div>{children}</div>
      );

      const CustomComponentWithOneChildTest = (
        <CustomComponent>
          <div></div>
        </CustomComponent>
      );
      
      expect(CustomComponentWithOneChildTest).toBe('<div><div></div></div>')

      
      const CustomComponentWithTwoChildrenTest = (
        <CustomComponent>
          <div></div>
          <div></div>
        </CustomComponent>
      );
      
      expect(CustomComponentWithTwoChildrenTest).toBe('<div><div></div><div></div></div>')
    });
  });

  describe('When used in a component with complex custom component and primitive component nesting', () => {
    it('Should work', () => {
      const PrimitivePartA = (
        <div />
      );

      const PrimitivePartB = (
        <div>
          <div></div>
        </div>
      );

      const ComponentPartA = ({ children }) => (
        <div>{children}</div>
      );

      const ComplexComponent = ({ children }) => (
        <ComponentPartA>
          <ComponentPartA>
            <ComponentPartA />
          </ComponentPartA>
          {PrimitivePartA}
          {children}
        </ComponentPartA>
      );

      const ComplexComponentTest = (
        <ComplexComponent>
          {PrimitivePartB}
        </ComplexComponent>
      );

      expect(ComplexComponentTest).toBe('<div><div><div></div></div><div></div><div><div></div></div></div>')
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