import React from 'react'
import {Box,Text,Image } from '@chakra-ui/react'
import Styles from '../navBar.module.css'

function Logo() {
  return (
      <Box className={Styles.BoxI}>
        <Image  borderTopRadius="50%" src="../public/main-pic.jpg" width="50px" height="50px" alt="my Logo"/>
        <Text  className={Styles.text} style={{color:"white"}}>MoroccanWise</Text>
        </Box>  
   
  )
}

export default Logo
