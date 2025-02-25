
import './App.css';
import React from 'react';



import Footer from "./Component/footer/Footer";
import Heropage from "./Component/heroSection/Heropage";
import Courses from "./Component/course/Courses";
import Description from "./Component/descript/Description";
// import Navbar from "./Component/heroSection/Navbar"
import Post from "./Component/post/Post";
import Total from "./Component/totalstudent/Total";
import TutorCom from "./Component/tutorCom/TutorCom";
import NavBar from './Component/nav/NavBar';
import { Route, Routes } from 'react-router-dom';
import Abouts from './Component/abouts/Abouts';
import Contact from './Component/contact/Contact';
import Service from './Component/service/Service'
import HomePage from './Component/home/HomePage';



function App() {
  return (
    <div>
      <NavBar />
      
      <main>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/abouts' element={<Abouts />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element ={<Service/>}/>
        </Routes>


      </main>
      


      







      <Footer />




    </div>
  );
}

export default App;
