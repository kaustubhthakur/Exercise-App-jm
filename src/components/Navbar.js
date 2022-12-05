import React from 'react'
import { Link } from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../assets/images/Logo.jpg'
const Navbar = () => {
  return (
  <Stack direction="row"  justifyContent="space-around"  sx={{gap:{sm:'122px',xs:'40px'}, mt:{sm:'32px',xs:'20px'},justifyContent:'none'}}  px="20px">
    <Link to="/">
    <img src={Logo} alt="" style={{ width:'88px',height:'88px',margin:'0 20px'}} />
    </Link>
    <Stack direction="row" alignItems="flex-end" gap="40px">
        <Link to="/" style={{textDecoration:'none',color:'black'}}  >Home</Link>
        <a href="#exercises" style={{textDecoration:'none',color:'black'}} >Exercises</a>
    </Stack>
  </Stack>
  )
}

export default Navbar