import React from 'react'
import Styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={Styles.Footer}>
      <p>
      &#169; Copyright {new Date().getFullYear()} MoroccanWise
      </p>
    </footer>
  )
}

export default Footer
