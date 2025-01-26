import './navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ScrollLink to="aboutus" smooth={true} duration={500}>
                    ABOUT US
                </ScrollLink>
                <RouterLink to="/newbook">NEW BOOK</RouterLink>
            </div>
            <div className="navbar-logo">
                {/* Make the logo clickable and redirect to the home page */}
                <RouterLink to="/">
                    <img src="https://i.postimg.cc/4xW7jFzf/logo.png" alt="logo" className="logo1" />
                </RouterLink>
            </div>
            <div className="navbar-right">
                <RouterLink to="/signup">SIGN UP</RouterLink>
                <ScrollLink to="contactus" smooth={true} duration={500}>
                    CONTACT US
                </ScrollLink>
            </div>
        </nav>
    );
}

export default Navbar;
