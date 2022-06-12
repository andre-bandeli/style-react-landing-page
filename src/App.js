
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Team from './components/team/Team';

function App() {
  return (
    <div className="App">
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
