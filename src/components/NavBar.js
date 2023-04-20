import DudHome from '../images/DudHome.jpeg'

function NavBar(){
    return (
        <div className='landing-main'>  
            {/* <img src={DudHome} alt="brown dog looking into the camera"/> */}
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SERVICES & PRICING</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">JOIN THE REVOLUTION</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar