import logo from '../images/logo.png'
import { Link, Route, Routes} from 'react-router-dom';

function Nav(){
    return(
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
    )
}

export default Nav