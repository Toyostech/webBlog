
import './App.css';
import React from 'react';



import Footer from "./Component/footer/Footer";

// import Navbar from "./Component/heroSection/Navbar"

import NavBar from './Component/nav/NavBar';
import { Route, Routes } from 'react-router-dom';
import Abouts from './Component/abouts/Abouts';
import Contact from './Component/contact/Contact';
import Service from './Component/service/Service'
import HomePage from './Component/home/HomePage';
import { createTheme, CssBaseline, Switch, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { darkPalette, lightPalette } from './Component/lib';
import Note from './Component/note/Note';
// import HomeVideo from './Component/bgVideo/HomeVideo';




function App() {
  const [isdarkmode, setDarkMode] = useState(false)
  const theme = createTheme(isdarkmode ? darkPalette : lightPalette)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div style={{
        overflow: "hidden"
      }}>

        <NavBar />
        {/* <HomeVideo/> */}
       

        <main>
       
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/abouts' element={<Abouts />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
          </Routes>


        </main>










        <Switch onCheck={isdarkmode} onChange={() => setDarkMode((prev) => !prev)} />
      
        <Footer />




      </div>
    </ThemeProvider>

  );
}

export default App;
