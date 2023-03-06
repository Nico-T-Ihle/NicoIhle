import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Banner from './Components/Banner';
import { Skills } from './Components/Skills';
import Footer from './Components/Footer';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
