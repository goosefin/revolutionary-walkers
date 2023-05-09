import ig from  '../images/icons8-instagram-50.png'
import yelp from '../images/icons8-yelp-50.png'

function Footer(){
    return(
        <div id="footer" className="text-white">
            <p>© 2023 Revolutionary Walkers, LLC. All rights reserved</p>
            <div id="footer-links">
                <img className="logos border-solid border-[1px] border-white rounded-lg hover:bg-white" src={ig} alt="instagram logo"/>
                <img className="logos border-solid border-[1px] rounded-lg border-white hover:bg-white"  src={yelp} alt="yelp log"/>
                <a className="hover:underline" href="revolutionarywalkers.com/careers">Careers</a>
            </div>
        </div>
    )
}

export default Footer