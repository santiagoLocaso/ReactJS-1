import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import SearchBar from "../../common/searchBar/SearchBar";

const Navbar = () => {

  const [showPerifericosDropdown, setShowPerifericosDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handlePerifericosClick = () => {
    setShowPerifericosDropdown(!showPerifericosDropdown);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showPerifericosDropdown && !event.target.closest(".dropdown")) {
        setShowPerifericosDropdown(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showPerifericosDropdown]);

  const handleCloseDropdown = () => {
    setShowPerifericosDropdown(false);
  };

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  }

  // const handleMobileMenuToggle = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  return (
      <div className="navbarContainer">
        <div className="containerNavbar">
          <Link to="/" style={{textDecoration: "none", color: "black", fontSize: "30px"}}>
            <h4 >TecnoLomas</h4>
          </Link>
          <button className="hamburgerButton" onClick={toggleMenu}>
              <MenuIcon/>
          </button>

          <ul className={`categories ${isOpen ? "is-open" : ""}`}>
            <Link to="/" className="links">Inicio</Link>
            {/* <Link to="/category/perifericos" className="links">Perifericos</Link> */}
            <li className="dropdown">
            <div className={`links perifericos-link ${showPerifericosDropdown ? 'active' : ''}`}
              onClick={handlePerifericosClick}>
              <Link style={{textDecoration:"none", color:"black"}}>Periféricos</Link>
            </div>
            {showPerifericosDropdown && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/category/teclados" className="links" onClick={handleCloseDropdown}>
                    Teclados
                  </Link>
                </li>
                <li>
                  <Link to="/category/mouse" className="links" onClick={handleCloseDropdown}>
                    Mouse
                  </Link>
                </li>
                <li>
                  <Link to="/category/auriculares" className="links" onClick={handleCloseDropdown}>
                    Auriculares
                  </Link>
                </li>
              </ul>
            )}
          </li>
            <Link to="/category/monitores" className="links">Monitores</Link>
            <Link to="/category/notebooks" className="links">Notebooks</Link>
          </ul>

          <CartWidget />
        </div>
        {isOpen && (
        <div className="menuBox">
          <ul className="categories">
            <Link to="/" className="links">Inicio</Link>
            <li className="dropdown">
              <div className={`links perifericos-link ${showPerifericosDropdown ? 'active' : ''}`}
                onClick={handlePerifericosClick}>
                <Link style={{textDecoration:"none", color:"black"}}>Periféricos</Link>
              </div>
              {showPerifericosDropdown && (
                <ul className="dropdown-content">
                  <li>
                    <Link to="/category/teclados" className="links" onClick={handleCloseDropdown}>
                      Teclados
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/mouse" className="links" onClick={handleCloseDropdown}>
                      Mouse
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/auriculares" className="links" onClick={handleCloseDropdown}>
                      Auriculares
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <Link to="/category/monitores" className="links">Monitores</Link>
            <Link to="/category/notebooks" className="links">Notebooks</Link>
          </ul>
        </div>
      )}
        <SearchBar /> 
      </div>
  );
};

export default Navbar;
