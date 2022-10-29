import { useState, useEffect } from 'react'

export const useViewport = () => {
  const [width, setWidth] = useState(null)

  useEffect(() => {
    setWidth(window.innerWidth)

    const handleWindowResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  // Return the width so we can use it in our components
  return width
}