import Nav from './components/Nav'
import Collage from "./components/Collage";
import Benefits from "./components/Benefits";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Home from './components/Home'
import { Route, Routes} from 'react-router-dom';
import Services from './pages/Services'

function App() {
  return (
    <>
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
