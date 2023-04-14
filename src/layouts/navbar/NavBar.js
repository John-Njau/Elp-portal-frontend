
import Search from './Search'
import './css/navbar.css'
import NavIcons from "./NavIcons";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Search />
            <NavIcons />  
               
        </div>
     );
}
 
export default Navbar;