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
      <div className='title'>
          <Link to='/home' onClick={closeMobileMenu}>
            jpeg.shay
          </Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li
          className={click ? "images-hide" : "nav-item nav-links"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Images
          {dropdown && <Dropdown />}
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
          <Link to="/gallery/abstract" className="nav-links" onClick={closeMobileMenu}>
            ABSTRACT
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link to="/gallery/cars" className="nav-links" onClick={closeMobileMenu}>
            CARS
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link to="/gallery/live" className="nav-links" onClick={closeMobileMenu}>
            LIVE MUSIC
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link
            to="/gallery/portraits"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            PORTRAITS
          </Link>
          <hr/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar