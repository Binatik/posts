import { useMemo, useEffect } from "react";
import { useLatest } from "./uselatest";

export const useMakeEffect = effect => {
  return function useMake(callback, delay) {
    const latestCb = useLatest(callback);

    const makeEffect = useMemo(
      () =>
        effect((...args) => {
          latestCb.current(...args);
        }, delay),
      [delay, latestCb]
    );

    useEffect(() => () => makeEffect.cancel(), [effect]);

    return makeEffect;
  };
};
