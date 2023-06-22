import Nav from './components/Nav'
import Collage from "./components/Collage";
import Benefits from "./components/Benefits";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Home from './components/Home'
import { Link, Route, Routes} from 'react-router-dom';
import Services from './pages/Services'

function App() {
  const navColor = () =>{
    let nav = document.getElementById('nav-div')
    nav.style.backgroundColor = '#1b1c1d'
    console.log('clicked')
  }
  return (
    <>
      {/* <Nav navColor={navColor}/> */}
      <Nav/>
      <Routes>
        <Route path="/" element={
          <>
            <Home/>
            <Benefits/>
            <Collage/>
            <WhyUs/>
          </>
        }/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/faq"/>
        <Route path="/join"/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
