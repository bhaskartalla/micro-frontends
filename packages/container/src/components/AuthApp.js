import React, { useEffect, useRef } from 'react'
import { mount } from 'auth/AuthApp'
import { useHistory } from 'react-router-dom'

const AuthApp = ({ onSignIn }) => {
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
        onSignIn,
      }
      console.log('🚀 ~ AuthApp ~ config:', config)

      const { onParentNavigate } = mount(ref.current, config)
      if (onParentNavigate) {
        history.listen(onParentNavigate)
      }
    }
  }, [])

  return (
    <div
      id='AuthApp'
      ref={ref}
    ></div>
  )
}

export default AuthApp
