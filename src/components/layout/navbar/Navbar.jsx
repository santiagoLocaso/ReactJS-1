import { Link } from "react-router-dom";

import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import SearchBar from "../../common/searchBar/SearchBar";

const Navbar = () => {
  return (
      <div className="navbarContainer">
        <div className="containerNavbar">
          <Link to="/" style={{textDecoration: "none", color: "black", fontSize: "30px"}}>
            <h4 >TecnoLomas</h4>
          </Link>

          <ul className="categories">
            <Link to="/" className="links">Inicio</Link>
            <Link to="/category/perifericos" className="links">Perifericos</Link>
            <Link to="/category/monitores" className="links">Monitores</Link>
            <Link to="/category/notebooks" className="links">Notebooks</Link>
          </ul>

          <CartWidget />
        </div>
        <SearchBar /> 
      </div>
  );
};

export default Navbar;
