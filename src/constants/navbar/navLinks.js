import { Link } from "react-router-dom";
import "./Navbar.scss"

const NavLinksContainer = (props) => {
    const {isMobile, closeMobileNav, className} = props
    

    return (
        <div className={`${className}`}>
                <Link className='nav-link' to='/about' onClick={()=> isMobile && closeMobileNav()} >
                    About us
                </Link>
                <Link className='nav-link' to='/' onClick={()=> isMobile && closeMobileNav()}  >
                    Create events
                </Link>
                <Link className='nav-link' to='/about' onClick={()=> isMobile && closeMobileNav()} >
                    View events
                </Link>
                <Link className='nav-link btn' to='/' onClick={()=> isMobile && closeMobileNav()}  >
                    Contact us
                </Link>
                
                
            </div>
    )
}

export default NavLinksContainer;