/* eslint-disable react/prop-types */
import "./ProductCard.css"
import { Link } from "react-router-dom";

const ProductCard = ({ elemento = true }) => {
  return (
    <div className="productCard-container">
      <div className="productCard-media-container">
        <img className="productCard-media" src={elemento.img} alt={elemento.title} />
      </div>
      <div className="productCard-content">
        <h5 className="productCard-title">{elemento.title}</h5>
        <p className="productCard-description">{elemento.description}</p>
        <h3 className="productCard-price">${elemento.price}</h3>
      </div>
      <div className="productCard-actions">
        <Link to={`/itemDetail/${elemento.id}`}>
          <button>Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;