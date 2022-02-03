import { useEffect, useRef, useState } from 'react';

export function useDynamicSvgImport(svgName) {
  const IconRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        IconRef.current = (await import(`assets/icons/${svgName}.svg`)).default;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [svgName]);

  return { isLoading, error, Svg: IconRef.current };
}
