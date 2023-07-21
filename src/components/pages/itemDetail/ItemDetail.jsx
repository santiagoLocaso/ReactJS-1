import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PacmanLoader from "react-spinners/PacmanLoader";
const stylesLoader = {
  display:"flex", justifyContent: "center", alignItems: "center", height: "100vh"};


import { db } from "../../../firabaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";


import "./ItemDetail.css"

const ItemDetail = () => {

  const {addToCart, getQuantityById} = useContext(CartContext)

  
  const [producto, setProducto] = useState({});


  const [isLoading, setIsLoading] = useState(true);

  
  const {id} = useParams()

  const totalQuantity = getQuantityById(id)

  // ----------------------------------------------------------------

  useEffect(() => {
    let productRef = doc(db, "products", id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
      setIsLoading(false);
    });

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, [id]);

  // useEffect(() => {
  //   let productRef = doc(db, "products", id);
  //   getDoc(productRef).then((res) => {
  //     setProducto({ ...res.data(), id: res.id });
  //   });
  // }, [id]);

  // if (!producto.id) {
  //   return (
  //     <div style={{  display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
  //       <PacmanLoader color="red" cssOverride={stylesLoader} size={20} />
  //     </div>
  //   );
  // }

  const onAdd = (cantidad) => {
    let productCart = {...producto, quantity:cantidad}
    addToCart(productCart)

    toast.success('Producto agregado al carrito', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  //----------------------------------------------------------------

  if (isLoading) {
    return (
      <div style={stylesLoader}>
        <PacmanLoader color="red" size={20} />
      </div>
    );
  }

  //----------------------------------------------------------------

  return (
    
    <div className="card-container">
      <div className="card">
          <div className="product-container">
            <div className="product-image-container">
              <img className="product-image" src={producto.img} alt={producto.title} />
            </div>
            <div className="product-info-container">
              <h2>{producto.title}</h2>
              <h3 className="product-description">{producto.description}</h3>
              <h4 className="product-price">$ {producto.price}</h4>
            </div>
          {
            producto.stock > 0 && 
            (typeof(totalQuantity) === "undefined" || producto.stock > totalQuantity ) && (
            <CounterContainer 
            className="counter-container"
            stock={producto.stock} 
            onAdd={onAdd} 
            initial={totalQuantity} 
            /> 
          )}

          {
            producto.stock === 0 && <h2 className="stock-message">No hay stock!</h2>
          }

          {
            typeof(totalQuantity) !== "undefined" && 
            totalQuantity === producto.stock && (
            <h2 className="stock-message">Stock agotado!</h2> 
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
    
  );
};

export default ItemDetail;
