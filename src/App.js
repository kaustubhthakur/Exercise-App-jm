import React from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Exercise from './pages/Exercise';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
 
  <BrowserRouter>
  
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<Exercise />} />
    </Routes>
    <Footer />
  </Box>
  </BrowserRouter>


  
);

export default App;