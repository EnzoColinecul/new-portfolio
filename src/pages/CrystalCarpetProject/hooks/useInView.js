import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold },
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}

export default useInView;
