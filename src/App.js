
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Team from './components/team/Team';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Header/>
      <About/>
      <Team/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
