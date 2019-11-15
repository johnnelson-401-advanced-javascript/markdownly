// CREDIT: https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e

export const loadState = () => {
  try {
    const fetchedState = localStorage.getItem('data');
    if(fetchedState === null) {
      return undefined;
    }
    return JSON.parse(fetchedState);
  } catch(err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const fetchedState = JSON.stringify(state);
    localStorage.setItem('data', fetchedState);
  } catch(err) {
    return undefined;
  }
};
