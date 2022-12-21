import React from 'react'
import { useLocation } from 'react-router-dom'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname
  const title = currentLocation.replace("/", "")

  return (
    <h2 style={{ textTransform: 'capitalize' }}>
      {title}
    </h2>
  )
}

export default React.memo(AppBreadcrumb)