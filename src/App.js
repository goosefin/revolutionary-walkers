// import logo from './logo.svg';
// import './App.css';
import NavBar from "./components/NavBar";
import Collage from "./components/Collage";
import Benefits from "./components/Benefits";

function App() {
  return (
    <div id="landing-main">
      <NavBar/>

      <div className='flex flex-col items-center justify-center' id="slogan">
        <p className="slogan-text">FOR YOU, THEY'RE MORE THAN JUST A PET</p>
        <p className="slogan-text">FOR US, IT'S MORE THAN JUST A JOB</p>
      </div>

      <Benefits/>
      <Collage/>
    </div>
    
  );
}

export default App;
