interface SessionStorageMock {
  removeItem: jest.Mock<boolean, [string], any>;
  clear: jest.Mock<{}, [], any>;
  getItem: jest.Mock<string | null, [string], any>;
  setItem: jest.Mock<string, [string, string], any>
}

const sessionStorageMock: SessionStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => (store[key] = value.toString())),
    removeItem: jest.fn((key: string) => delete store[key]),
    clear: jest.fn(() => (store = {})),
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
});

Object.defineProperty(window, 'localStorage', {
  value: sessionStorageMock,
});

export {}
