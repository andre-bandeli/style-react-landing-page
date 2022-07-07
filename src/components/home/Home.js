import React from 'react';

import Navbar from "../home/navbar/Navbar";
import Header from "../home/header/Header";
import About from "../home/about/About";
import Budget from "../home/budget/Budget";
import Projects from "../home/projects/Projects";
import Contact from "../home/contact/Contact";
import Footer from "../home/footer/Footer";

const Home = () =>{
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <About/>
      <Budget/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;