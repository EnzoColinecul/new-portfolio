import '@testing-library/jest-dom';

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
}

if (!window.IntersectionObserver) {
  window.IntersectionObserver = class IntersectionObserver {
    // eslint-disable-next-line class-methods-use-this
    observe() {}

    // eslint-disable-next-line class-methods-use-this
    unobserve() {}

    // eslint-disable-next-line class-methods-use-this
    disconnect() {}
  };
}

if (window.HTMLDialogElement && !window.HTMLDialogElement.prototype.showModal) {
  window.HTMLDialogElement.prototype.showModal = function showModal() {
    this.setAttribute('open', '');
  };

  window.HTMLDialogElement.prototype.close = function close() {
    this.removeAttribute('open');
  };
}
