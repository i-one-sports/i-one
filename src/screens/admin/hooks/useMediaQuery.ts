import { useEffect, useState } from 'react'

/** Reactively tracks a CSS media query. */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}

/** True on viewports < 640px (Tailwind's `sm` breakpoint). */
export const useIsMobile = () => useMediaQuery('(max-width: 639px)')
