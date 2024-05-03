import { useCallback, useState } from 'react';

export const useLoadingCallback = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleCallback = useCallback(
    async (...args) => {
      setError(undefined);
      setIsLoading(true);

      try {
        const value = await callback(...args);
        setIsLoading(false);
        return value;
      } catch (e) {
        setError(e);
        setIsLoading(false);
        throw e;
      }
    },
    [callback],
  );

  const reset = useCallback(() => {
    setIsLoading(false);
    setError(undefined);
  }, []);

  return [handleCallback, isLoading, error, reset];
};
