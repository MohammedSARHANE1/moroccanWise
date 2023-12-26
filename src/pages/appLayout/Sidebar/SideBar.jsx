import React from 'react'
import { Outlet } from 'react-router-dom'
import Styles from './SideBar.module.css'
import Logo from '../../homePage/component/Logo/Logo'
import AppNav from './AppNav/AppNav'
import Footer from '../../homePage/component/Footer/Footer'
function SideBar() {
  return (
    <div  className={Styles.SideBar}>
      <Logo/>
      <AppNav/>
     
      <Footer/>
    </div>
  )
}

export default SideBar
