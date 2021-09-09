import { useState } from 'react';

export default function useLocalStorage(key, data) {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : data;
    } catch (error) {
      console.log(error);
      return data;
    }
  });

  function setValue(value) {
    try {
      setState(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  return [state, setValue];
}
