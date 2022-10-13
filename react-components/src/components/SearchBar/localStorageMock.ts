const getLocalStorageMock = function () {
  let store: { [key: string]: string } = {};

  return {
    getItem(key: string): string {
      return store[key];
    },

    setItem(key: string, value: string): void {
      store[key] = value;
    },

    clear(): void {
      store = {};
    },
  };
};

export default getLocalStorageMock;
