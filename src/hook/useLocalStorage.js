import { useState } from 'react';

export default function useLocalStorage(key, data) {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : data;
    } catch (error) {
      return data;
    }
  });

  function setValue(value) {
    setState(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [state, setValue];
}
