import React from 'react'
import Map from './Map/Map'
import Styles from './AppLayout.module.css'
import SideBar from './Sidebar/SideBar'
function AppLayout() {
  return (
    <div  className={Styles.AppLayout} >
      <SideBar/>
      <Map/>
    </div>
  )
}

export default AppLayout
