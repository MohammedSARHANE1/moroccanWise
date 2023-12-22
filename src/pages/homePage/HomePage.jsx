import React from 'react'
import {Button,Box,Text,Image, Heading } from '@chakra-ui/react'
import Styles from './HomePage.module.css'
import NavBar from './component/NavBar'
function HomePage() {
  return (
    <div className={Styles.nav}>
     <NavBar/>
     <Box   display="grid" alignItems="center" justifyItems="center">
       <Heading as='h2' size='lg' >you Travel World</Heading>
       <Heading as='h2' size='lg' >MorrocanWise keeps track of your</Heading>
       <Heading as='h2' size='lg'>Advantures</Heading>
     </Box>
    <Box className={Styles.text} display="grid" alignItems="center" justifyItems="center">
    <Text display="grid" alignItems="center" justifyItems="center">
    <span> A word map that tracks your footsteps into every city you can</span> 
     <span>thinks of . never forgetyour wonderful experience, and show your friend how you </span> 
     <span>have wanderred the world. </span>
    </Text>
    <Button backgroundColor=""> START TRACKING NOW</Button>
    </Box>
    </div>
  )
}

export default HomePage
