import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CIcon from '@coreui/icons-react'
import {
  cilMenu
} from '@coreui/icons'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname
  const title = currentLocation.replace("/", "")
  const [size, setSize] = useState();
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const dispatch = useDispatch()
  React.useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      setSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  })

  return (
    <h2 style={{ textTransform: 'capitalize' }} >
      {size <= 1000 ?
        <CIcon icon={cilMenu} height={36} style={{ paddingTop: 12, paddingRight: 10 }} onClick={() => !sidebarShow ? dispatch({ type: 'set', sidebarShow: true }) : dispatch({ type: 'set', sidebarShow: false })} />
        : null}
      {title}
    </h2>
  )
}

export default React.memo(AppBreadcrumb)