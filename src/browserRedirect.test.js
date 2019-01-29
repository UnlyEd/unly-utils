const { browserRedirect } = require('./browserRedirect');

class Window {
  constructor() {
    this.target = '';
    this.location = {
      href: null,
    };
    this.open = this.open.bind(this);
  }

  open(url, target) {
    this.target = target;
    return target;
  }
}

global.window = new Window();

describe('browserRedirect', () => {
  test('should assign url to window.location.href', () => {
    browserRedirect({ url: 'hello', target: '' });
    expect(global.window.location.href).toEqual('hello');
  });
  test('open a new window', () => {
    browserRedirect({ url: 'hello', target: '_blank' });
    expect(global.window.target).toEqual('_blank');
  });
});
