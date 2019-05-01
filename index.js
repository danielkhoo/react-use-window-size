import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });
  const scrollHandler = () => {
    setScroll(window.scrollY);
  };
  return scroll;
};

export default useScroll;
