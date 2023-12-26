import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Box,Flex } from '@chakra-ui/react'
import Styles from './AppNav'
function AppNav() {
  return (
    <div  className={Styles.AppNav}>
      <Flex  justify="center" >
     <Box justifyContent="center"
           width="200px"
           height="40px"
           display="flex" 
           gap="1rem" 
           bgColor= "rgb(94, 102, 94)"
           textAlign="center"
           marginStart="1rem">
        <Link to="cities"  textDecoration='none' color='white' >CITIES</Link>
        <Link to="countries"  textDecoration='none'>COUNTRIES</Link>
        </Box>
      </Flex>
    <Outlet/>
    </div>
  )
}

export default AppNav
