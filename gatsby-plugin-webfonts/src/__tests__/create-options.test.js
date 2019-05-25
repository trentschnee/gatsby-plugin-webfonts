import createOptions, { defaultOptions } from "../create-options";

describe(`createOptions`, () => {
  it(`should return default options`, () => {
    const options = createOptions();
    expect(options).toEqual(defaultOptions);
  });

  it(`should overwrite default options`, () => {
    const expected = [`test`];
    const { formats } = createOptions({ formats: expected });
    expect(formats).toEqual(expected);
  });
});
