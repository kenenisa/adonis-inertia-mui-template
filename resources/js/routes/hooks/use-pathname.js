import { useMemo } from 'react';
// import { useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

export function usePathname() {
  // const { pathname } = useLocation();
  const { pathname } = window.location


  return useMemo(() => pathname, [pathname]);
}
