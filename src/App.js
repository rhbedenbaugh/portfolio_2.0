import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import ProjectContainer from './components/ProjectContainer';
import About from './components/About';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <div class='gradient-1'/>
      <ProjectContainer/>
      <div class='gradient-2'/>
      <About/>
      <div class='gradient-3'/>
      <ContactFooter />
    </div>
  );
}

export default App;
