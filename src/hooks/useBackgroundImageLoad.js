import { useState, useEffect } from 'react';

export function useBackgroundImageLoad(src) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setLoaded(true);
      return;
    }

    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => {
      setError(true);
      setLoaded(true);
    };
    img.src = src;

    if (img.complete) {
      setLoaded(true);
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { loaded, error };
}
