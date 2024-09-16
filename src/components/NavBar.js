import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink 
        exact 
        to="/" 
        activeClassName="active-link"
        aria-label="Home Page"
      >
        Home
      </NavLink>
      <NavLink 
        to="/directors" 
        activeClassName="active-link"
        aria-label="Directors Page"
      >
        Directors
      </NavLink>
      <NavLink 
        to="/actors" 
        activeClassName="active-link"
        aria-label="Actors Page"
      >
        Actors
      </NavLink>
    </nav>
  );
}

export default NavBar;
