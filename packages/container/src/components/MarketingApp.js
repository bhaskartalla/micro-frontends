import React, { useEffect, useRef } from 'react'
import { mount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'

const MarketingApp = () => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    if (ref) {
      const config = {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location
          if (pathname !== nextPathname) {
            history.push(nextPathname)
          }
        },
      }
      const { onParentNavigate } = mount(ref.current, config)

      if (onParentNavigate) {
        history.listen(onParentNavigate)
      }
    }
  }, [])

  return (
    <div
      id='MarketingApp'
      ref={ref}
    ></div>
  )
}

export default MarketingApp
