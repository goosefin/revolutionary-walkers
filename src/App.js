import NavBar from "./components/NavBar";
import Collage from "./components/Collage";
import Benefits from "./components/Benefits";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import logo from './images/logo.png';
import { Link, Route, Routes} from 'react-router-dom';
import Services from './pages/Services'

function App() {
  return (
    <div id="landing-main">
      {/* <NavBar/> */}

      <div className='flex justify-between items-start' >  
        <img src={logo} alt="green and blue cartoon of a dog fetching a ball" id="nav-logo"/>
        <nav>
          <ul id="nav-list" className='flex justify-evenly text-xl'>
            <li><Link className='hover:text-[#016891] hover:underline' to="/">HOME</Link></li>
            <li><Link className='hover:text-[#016891] hover:underline' to="/services">SERVICES & PRICING</Link></li>
            <li><Link className='hover:text-[#016891] hover:underline' to="/faq">FAQ</Link></li>
            <li><Link className='hover:text-[#016891] hover:underline' to="/join">JOIN THE REVOLUTION</Link></li>
          </ul>
        </nav>
      </div>

      <div className='flex flex-col items-center justify-center' id="slogan">
        <p className="slogan-text">FOR YOU, THEY'RE MORE THAN JUST A PET</p>
        <p className="slogan-text">FOR US, IT'S MORE THAN JUST A JOB</p>
      </div>

      <Routes>
        <Route path="/"/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/faq"/>
        <Route path="/join"/>
      </Routes>

      <Benefits/>
      <Collage/>
      <WhyUs/>
      <Footer/>
    </div>
    
  );
}

export default App;
