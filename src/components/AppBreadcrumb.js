import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname
  const title = currentLocation.replace("/", "")
  const sidebarShow = useSelector((state) => state.sidebarShow)
 const dispatch = useDispatch()


  return (
    <h2 style={{ textTransform: 'capitalize' }}>
    <i class="cil-energy"/>

    <button  onClick={()=> !sidebarShow? dispatch({ type: 'set', sidebarShow: true }):dispatch({ type: 'set', sidebarShow: false })}>Show</button>
      {title}
    </h2>
  )
}

export default React.memo(AppBreadcrumb)