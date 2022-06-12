
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Header/>
      <About/>
      <Slider/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
