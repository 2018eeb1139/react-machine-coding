import { useRef } from "react";

export default function useCustomMemo(cb, dependencyArray) {
  const ref = useRef({
    memoizedValue: undefined,
    lastDependencyArray: undefined,
  });

  if (
    !ref.current.memoizedValue ||
    !areArrayEqual(dependencyArray, ref.current.lastDependencyArray)
  ) {
    ref.current.memoizedValue = cb();
    ref.current.lastDependencyArray = dependencyArray;
  }
  return ref.current.memoizedValue;
}

function areArrayEqual(curr, prev) {
  if (!curr || !prev || curr.length !== prev.length) {
    return false;
  }
  for (let i = 0; i < curr.length; i++) {
    if (curr[i] !== prev[i]) return false;
  }
  return true;
}
