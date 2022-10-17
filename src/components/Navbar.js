import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
      setDropdown(true)
    };
    const onMouseLeave = () => {
      setDropdown(false)
    };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className={click ? "images-hide" : "nav-item nav-links"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Images
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
        
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <hr/>
          <Link to="/newborn" className="nav-links" onClick={closeMobileMenu}>
            NEWBORN
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link to="/family" className="nav-links" onClick={closeMobileMenu}>
            FAMILY
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link to="/fineart" className="nav-links" onClick={closeMobileMenu}>
            FINE ART
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link
            to="/landscapes"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            LANDSCAPES
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link
            to="/blackandwhite"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            BLACK & WHITE
          </Link>
          <hr/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar