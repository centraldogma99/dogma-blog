import _ from 'lodash'
import { useEffect, useState } from 'react'

const useViewport = () => {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const onResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    const onResizeThrottled = _.throttle(onResize)
    window.addEventListener('resize', onResizeThrottled)

    return () => {
      window.removeEventListener('resize', onResizeThrottled)
    }
  }, [])

  return { width }
}

export default useViewport
