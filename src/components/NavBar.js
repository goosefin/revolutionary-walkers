import logo from '../images/logo.png'

function NavBar(){
    return (
        <>
            <div className='flex justify-between items-start' >  
                <img src={logo} alt="green and blue cartoon of a dog fetching a ball" id="nav-logo"/>
                <nav>
                    <ul id="nav-list" className='flex justify-evenly text-xl'>
                        <li><a href="#" className='hover:text-[#016891] hover:underline'>HOME</a></li>
                        <li><a href="#" className='hover:text-[#016891] hover:underline'>SERVICES & PRICING</a></li>
                        <li><a href="#" className='hover:text-[#016891] hover:underline'>FAQ</a></li>
                        <li><a href="#" className='hover:text-[#016891] hover:underline'>JOIN THE REVOLUTION</a></li>
                    </ul>
                </nav>
            </div>

            
        </>
    )
}

export default NavBar