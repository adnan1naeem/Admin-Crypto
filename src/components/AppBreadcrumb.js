import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname


  return (
<div>
   {currentLocation}
   </div>)
}

export default React.memo(AppBreadcrumb)
