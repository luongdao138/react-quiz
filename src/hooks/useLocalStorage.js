import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorageState = (newState) => {
    let newValue;
    try {
      if (typeof newState === 'function') newValue = newState(state);
      else newValue = newState;

      setState(newValue);
      sessionStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setLocalStorageState];
};

export default useLocalStorage;
