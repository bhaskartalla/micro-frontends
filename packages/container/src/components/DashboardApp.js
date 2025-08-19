import React, { useEffect, useRef } from 'react'
import { mount } from 'dashboard/DashboardApp'

const DashboardApp = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref) {
      mount(ref.current)
    }
  }, [])

  return (
    <div
      id='DashboardApp'
      ref={ref}
    ></div>
  )
}

export default DashboardApp
