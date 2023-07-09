import { Link } from "react-router-dom";

import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div>
        <div className={"containerNavbar"}>
          <Link to="/" style={{textDecoration: "none", color: "black", fontSize: "30px"}}>
            <h4 >TecnoLomas</h4>
          </Link>

          <ul className="categories">
            <Link to="/" className="links">Todas</Link>
            <Link to="/category/perifericos" className="links">Perifericos</Link>
            <Link to="/category/monitores" className="links">Monitores</Link>
            <Link to="/category/notebooks" className="links">Notebooks</Link>
          </ul>

          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
