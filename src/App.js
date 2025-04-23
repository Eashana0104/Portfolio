import './App.css';
import { NavBar } from './componants/NavBar';
import {Banner } from './componants/Banner';
import { Skills } from './componants/Skills';
import { Projects } from './componants/Projects';
import { Contact } from './componants/Contact';
import { Footer } from './componants/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
