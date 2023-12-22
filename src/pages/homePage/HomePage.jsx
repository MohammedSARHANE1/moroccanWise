import React from 'react'
import {Button,Box,Text,Image, Heading } from '@chakra-ui/react'
import Styles from './HomePage.module.css'
import NavBar from './component/NavBar'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <main className={Styles.nav}>
     <NavBar/>
     <Box className={Styles.nav2}  display="grid" justifyItems="center">
       <h2   >you Travel World</h2>
       <h2 >MorrocanWise keeps track of your</h2>
       <h2 >Advantures</h2>
     </Box>
    <Box 
    className={Styles.text}
     display="grid"
      alignItems="center" 
      justifyItems="center">
    <Text 
    display="grid"
     alignItems="center"
      justifyItems="center">
    <span > A word map that tracks your footsteps into every city you can</span> 
     <span>thinks of . never forgetyour wonderful experience, and show your friend how you </span> 
     <span>have wanderred the world. </span>
    </Text>
    <Box className={Styles.cta}>
      <Link to="/pricing" >
            START TRACKING NOW
       </Link></Box>
    
    </Box>
    </main>
  )
}

export default HomePage
