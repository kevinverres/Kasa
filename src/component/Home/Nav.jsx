import {Link, useLocation } from "react-router-dom";
import '../../assets/css/Nav.css'
function Nav() {
    const location = useLocation();
    let active = true
    let active2 = false
    if (location.pathname === "/about") {
        active2 = true
        active = false
    } else if (location.pathname === "/") {
        active = true
    } else {
        active2 = false
        active = false
    }
    return (
        <nav>
            <Link className={active ? 'Link Link-active' : 'Link Link-inactive'} title='Accueil' to='/'>Accueil</Link>
            <Link className={active2 ? 'Link Link-active' : 'Link Link-inactive'} title='À propos' to='/about'>À propos</Link>
        </nav>
    );
}

export default Nav;