import { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null && typeof delay === 'number') {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay]);
}

export default useInterval;
