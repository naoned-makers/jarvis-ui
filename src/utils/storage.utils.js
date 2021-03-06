const store = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const find = (key, defaultValue = null) =>
  (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue);

export { store, find };