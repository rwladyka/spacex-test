import { useEffect, useState } from 'react'

import { size } from '../utils/responsive'

const getMobile = (): boolean => window.innerWidth < size.tablet

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(getMobile())

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getMobile())
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [isMobile])

  return isMobile
}
