import { useState, useEffect } from "react";

/**
 * A custom hook that subscribes to a store and returns the current state.
 *
 * @template T - The type of the state object.
 * @template F - The type of the result of the callback function.
 * @param {function} store - A function that takes a callback function and returns the current state.
 * @param {function} callback - A function that takes the current state and returns the result.
 * @return {F | undefined} - The current state of the store, or undefined if the store has not been initialized.
 */
export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
