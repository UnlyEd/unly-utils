const convertLineBreaks = require('./convertLineBreaks');

describe('convertLineBreaks', () => {
  test('Should throw an error when given "str" argument is not a string', () => {
    expect(() => convertLineBreaks(true)).toThrow();
    expect(() => convertLineBreaks({})).toThrow();
    expect(() => convertLineBreaks([])).toThrow();
    expect(() => convertLineBreaks(5)).toThrow();
  });

  test('Should return an untouched string if there is no line break', () => {
    const str = 'How are you ?';
    expect(convertLineBreaks(str)).toEqual(str);
  });

  test('Should convert line breaks', () => {
    const str = 'Hello,\n please follow me';
    expect(convertLineBreaks(str)).toEqual('Hello,<br> please follow me');
  });

  test('Should convert line breaks using custom replacer', () => {
    expect(convertLineBreaks('Hello,\n please follow me', '<br />')).toEqual('Hello,<br /> please follow me');
  });
});
