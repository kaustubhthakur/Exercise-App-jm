import React from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'
import Banner from '../assets/images/Banner.jpg'
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color='black' fontWeight="600" fontSize="60px">Pump House</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
     Without Struggle <br />
      There Is NO Progress
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
     Explore The Exercises
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Checkout Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Beast Mode 
    </Typography>
    <img src={Banner} alt="hero-banner" className="hero-banner-img" />
  </Box>
  )
}

export default HeroBanner