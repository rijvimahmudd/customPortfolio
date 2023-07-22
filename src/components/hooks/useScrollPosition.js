import { useEffect, useRef, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef) { // Check if scrollRef.current is not null or undefined
      const { x, y } = scrollRef.current.getBoundingClientRect();
      setScrollPosition({ x, y });
    }
  };

  useEffect(() => {
    const scrollListener = () => handleScroll();
    if (window) {
      window.addEventListener('scroll', scrollListener);
    }

    

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return { scrollPosition, scrollRef };
};

export default useScrollPosition;
