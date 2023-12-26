
import React from 'react'
import { Link } from 'react-router-dom'
import { Flex,Box,Text,Image, Button } from '@chakra-ui/react'
import Styles from './navBar.module.css'
function NavBar() {
  return (
    <Flex  justify="space-between" >
        
        <Box className={Styles.BoxII}>
        <Box className={Styles.Box1}>
        <Link to='/pricing' style={{color:"white"}}>pricing</Link>
        
        </Box>
        <Box className={Styles.Box2}>  
          <Link to='/product' style={{color:"white"}}>Product</Link>
        </Box>
        <Box>
        <Button className={Styles.But}> Sign in</Button>
        </Box>
        </Box>
        
         
    </Flex>
  )
}

export default NavBar
