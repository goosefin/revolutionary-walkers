import goose2 from '../images/goose2.jpeg'
import goose3 from '../images/goose3.jpeg'
import jen from '../images/jen.jpeg'
import jen2 from '../images/jen2.jpeg'
import len from '../images/len.jpeg'
import len2 from '../images/len2.jpeg'

function Collage() {
    return(
        <div className="grid grid-cols-3 gap-4" id="collage-div">
            {/* add alt prop to these images */}
            <img src={len2} id="collage-1"/>
            <img src={jen} id="collage-2"/>
            <img src={goose2} id="collage-3"/>
            <img src={jen2} id="collage-4"/>
            <img src={goose3} id="collage-5"/>
            <img src={len} id="collage-6"/>
        </div>
    )
}

export default Collage