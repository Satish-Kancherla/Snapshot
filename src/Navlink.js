import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="container">
            <h1>SnapShort</h1>
            </div>
            <div className="navlink">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/beaches">Beaches</NavLink>
            <NavLink to="/mountains">Mountains</NavLink>
           
            </div>
            
        </nav>
     );
}
 
export default Navbar;