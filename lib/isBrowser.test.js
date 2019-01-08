const { isBrowser } = require('../index');

test('typeof window return false', () => {
  const browser = jest.fn(isBrowser);

  const bool = browser();

  expect(browser).toHaveReturned();
  expect(bool).toBe(false);
});
