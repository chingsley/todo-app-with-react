export const saveData = data => window.localStorage.setItem('data', JSON.stringify(data));
export const getData = () => JSON.parse(window.localStorage.getItem('data'));
export const clearLocalStorage = () => {
  window.localStorage.removeItem('data');
};