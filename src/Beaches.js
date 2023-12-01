import img1 from "./beach/b1.jpg";
import img2 from "./beach/b2.jpg";
import img3 from "./beach/b3.jpg";
import img4 from "./beach/b4.jpg";
import img5 from "./beach/b5.cms";

const Beaches = () => {
    return ( 
        <div className="images">
            <h1>Beach Pictures</h1>
            <img   src={img1} alt="First Img" />
            <img   src={img2} alt="beach-2"/>
            <img   src={img3} alt="beach-3"/>
            <img   src={img4} alt="beach-3"/>
            <img   src={img5} alt="beach-2"/>
        </div>
     );
}
 
export default Beaches;