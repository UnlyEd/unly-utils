/**
 * Special instruction to tell jest to run this file in a custom environment (overrides the testEnvironment in package.json)
 * See https://jestjs.io/docs/en/configuration.html#testenvironment-string
 *
 * @jest-environment jsdom
 */

const { isBrowser } = require('../index');

describe('isBrowser', () => {
  test('Should return true in a jsdom environment', () => {
    const _isBrowser = jest.fn(isBrowser);
    const bool = _isBrowser();

    expect(_isBrowser).toHaveReturned();
    expect(bool).toBe(true);
  });
});
