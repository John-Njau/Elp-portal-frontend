import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
    return ( 
        <ul className="search">
            <li>
                <FontAwesomeIcon icon={faBars} className="n-menu" />
            </li>
            <li>
                <input type='text' placeholder="Hinted search text" />
            </li>
            <li>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="n-icon" />
            </li>
            
        </ul>
     );
}
 
export default Search;