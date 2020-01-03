const foist = (obj, upon = globalThis) => {
  Object.entries(obj).forEach(
    ([key, value]) =>
      Object.defineProperty(upon, key, {
        value,
        writable: false,
      })
  );
};

export default foist;
