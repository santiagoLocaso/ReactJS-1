import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {products} from "../../../productsMock";
import "./SearchBar.css"

const SearchBar = () => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const searchBarRef = useRef(null);
  
    const handleSearch = (e) =>{
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter((product) => product.title.toLowerCase().startsWith(searchTerm));
        setFilteredProducts(filteredProducts);
        setSearchTerm(searchTerm);
        setInputValue(searchTerm);
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
            setSearchTerm("");
            setFilteredProducts([]);
          }
        };
    
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, []);

  return (
    <div className="searchContainer" ref={searchBarRef}>
        <input className="searchInput" type="text" placeholder="Buscar productos..." value={inputValue} onChange={handleSearch}/>
        {searchTerm !== "" && (
            <div className="resultsContainer">
                <ul className="resultsList">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <li key={index} className="resultsItem">
                                <Link to={`/itemDetail/${product.id}`} style={{textDecoration:"none", color:"black"}}>
                                    <h4>{product.title}</h4>
                                </Link>
                            </li>
                        ))
                    ) : (
                    <p className="noResults">No se encontraron resultados</p>
                    )}
                </ul>
            </div>
        )}
    </div>
  )
}

export default SearchBar