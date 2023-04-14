import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import avatar from "./avatar.jpeg"
import { useNavigate } from "react-router-dom";

const NavIcons = () => {

    const navigate = useNavigate()

    return ( 
        <ul className="navicon">
            <li>
                <FontAwesomeIcon icon={faGear} className="n-icon" />
            </li>
            <li>
                <FontAwesomeIcon icon={faBell} className="n-icon" />
            </li>
            <li>
                <img 
                    src={avatar} 
                    alt="avatar" 
                    className="avatar" 
                    width="40"
                    onClick={()=>navigate('/update/profile')}/>
            </li>
            <li>
                <FontAwesomeIcon icon={faBars} className="n-icon" />
            </li>
        </ul>
     );
}
 
export default NavIcons;