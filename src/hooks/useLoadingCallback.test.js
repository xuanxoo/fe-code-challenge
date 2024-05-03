import { renderHook, act, waitFor } from '@testing-library/react';
import { useLoadingCallback } from './useLoadingCallback';

describe('useLoadingCallback', () => {
  it('set loading state if callback is called but not resolved', async () => {
    const callback = () => Promise.resolve('foo');
    const { result } = renderHook(() => useLoadingCallback(callback));

    const [handleCallback] = result.current;

    act(() => {
      handleCallback();
    });

    expect(result.current[1]).toBe(true);

    await waitFor(() => expect(result.current[1]).toBe(false));
  });

  it('return value that provided callback returns', async () => {
    const callback = () => Promise.resolve('foo');
    const { result } = renderHook(() => useLoadingCallback(callback));

    const [handleCallback] = result.current;

    await act(async () => {
      const value = await handleCallback();

      expect(value).toBe('foo');
    });
  });

  it('set error state thrown by callback, loading state to false and then throw the error', async () => {
    const callback = () => Promise.reject('bar');
    const { result } = renderHook(() => useLoadingCallback(callback));

    const [handleCallback] = result.current;

    await act(async () => {
      try {
        await expect(handleCallback()).rejects.toThrow('bar');
      } catch (e) {}
    });

    expect(result.current[1]).toBe(false);
    expect(result.current[2]).toBe('bar');
  });

  it('reset loading state to false and error to undefined', async () => {
    const callback = () => Promise.reject('bar');
    const { result } = renderHook(() => useLoadingCallback(callback));

    const [handleCallback] = result.current;

    await act(async () => {
      try {
        await handleCallback();
      } catch (e) {}
    });

    act(() => {
      result.current[3]();
    });

    expect(result.current[2]).toBe(undefined);
  });
});
