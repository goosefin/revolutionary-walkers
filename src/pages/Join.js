import { Contact } from "../components/Contact"

function Join(){
    return(
        <div id="join-page" className="bg-[#2b7198]">
            <h1 className="pages-h1">Meet & Greet Form</h1>
            <div className="text-white flex justify-evenly" id="join-div">
                <p id="join-p"> If you'd like to request a free meet and greet fill out this form and we will get back to you as soon as possible. In your message make sure to include your dogs age, a brief description of their temprament as well as what time you need walks and the length of the walk. If you have any other question you can email us directly at <span className="text-red-300 underline">contact@revolutionarywalkers.com</span>.</p>
                <Contact/>
            </div>
        </div>
    )
}

export default Join