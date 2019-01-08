const { convertLineBreaks } = require('../index');

describe('convertLineBreaks', () => {
  test('typeof value is not string must throw error', () => {
    expect(() => convertLineBreaks(true)).toThrow();
  });

  test('Even if there is no line break, must return a string', () => {
    const firstString = 'How are you ?';
    const secondString = 'Hello,\n please follow me';

    const strToLineBreaks = jest.fn(convertLineBreaks);

    strToLineBreaks(firstString);
    strToLineBreaks(secondString);

    expect(strToLineBreaks).toHaveNthReturnedWith(1, 'How are you ?');
    expect(strToLineBreaks).toHaveNthReturnedWith(2, 'Hello,<br> please follow me');
  });
});
