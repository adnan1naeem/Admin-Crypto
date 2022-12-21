import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname
  const title = currentLocation.replace("/", "")
  const [size,setSize]=useState();
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
    <h2 style={{ textTransform: 'capitalize' }}>
    <i class="cil-energy"/>

    {size<=1000?<button  onClick={()=> !sidebarShow? dispatch({ type: 'set', sidebarShow: true }):dispatch({ type: 'set', sidebarShow: false })}>Show</button>:null}
      {title}
    </h2>
  )
}

export default React.memo(AppBreadcrumb)