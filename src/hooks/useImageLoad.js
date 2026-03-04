import { useState, useCallback, useRef, useEffect } from 'react';

export function useImageLoad() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const onLoad = useCallback(() => setLoaded(true), []);
  const onError = useCallback(() => {
    setError(true);
    setLoaded(true);
  }, []);

  return { loaded, error, onLoad, onError, imgRef };
}
