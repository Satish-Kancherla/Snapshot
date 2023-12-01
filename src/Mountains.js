import img1 from "./beach/m1.webp";
import img2 from "./beach/m2.jpg";
import img3 from "./beach/m3.webp";
import img4 from "./beach/m4.jpg";
import img5 from "./beach/m5.webp";

const Mountains = () => {
    return ( 
        <div className="images">
            <h1>Mountain Pictures</h1>
            <img src={img1} alt="Mountain-1 img"/>
            <img src={img2} alt="Mountain-2 img"/>
            <img src={img3} alt="Mountain-3 img"/>
            <img src={img4} alt="Mountain-4 img"/>
            <img src={img5} alt="Mountain-5 img"/>
            
        </div>
     );
}
 
export default Mountains;