import React from 'react'
import { Flex,Box,Text,Image, Heading } from '@chakra-ui/react'
import Styles from './HomePage.module.css'
import NavBar from './component/NavBar'
function HomePage() {
  return (
    <div className={Styles.nav}>
     <NavBar/>
     <Box   display="grid" alignItems="center" justifyItems="center">
       <Heading  >you Travel World</Heading>
       <Heading  >MorrocanWise keeps track of your</Heading>
       <Heading  >Advantures</Heading>
     
     </Box>
     <Box>
     <Heading   as='h1' size='m' >
     specialised in React
  </Heading>
     </Box>
    </div>
  )
}

export default HomePage
