import '../styles/Navbar.css'
import logo from '../assets/logo.svg'
function Navbar() {
    return (
        <>
            <div className="tutedude-pages-nav">
                <img className="tutedude-pag-logo" src={logo} alt="Logo" />
            </div>

        </>
    );
}

export default Navbar;