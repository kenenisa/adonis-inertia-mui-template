import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

export function useScrollToTop() {
  // const { pathname } = useLocation();
  const { pathname } = window.location

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
