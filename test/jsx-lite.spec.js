import JsxLite from '../src/jsx-lite';

describe('createComponent', () => {
  it('Should be a function', () => {
    expect(JsxLite.createComponent).toBeInstanceOf(Function);
  });
});

describe('createFragment', () => {
  it('Should be a function', () => {
    expect(JsxLite.createFragment).toBeInstanceOf(Function);
  });
});
