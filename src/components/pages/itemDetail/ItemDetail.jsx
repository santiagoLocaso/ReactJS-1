import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { db } from "../../../firabaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";


const ItemDetail = () => {

  const {addToCart, getQuantityById} = useContext(CartContext)

  
  const [producto, setProducto] = useState({});
  
  const {id} = useParams()

  const totalQuantity = getQuantityById(id)

  useEffect(() => {
    let productsCollection = collection(db, "products")
    let productRef = doc(productsCollection, id)
    getDoc(productRef).then( res => {
      setProducto({...res.data(), id: res.id})
    })

  }, [id]);

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

  return (
    <div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2 style={{padding: "20px"}}>{producto.title}</h2>
        <img style={{width: "20%"}} src={producto.img} alt={producto.title} />
        <h4 style={{fontSize: "25px"}}>$ {producto.price}</h4>
      </div>

      {
        producto.stock > 0 && 
        (typeof(totalQuantity) === "undefined" || producto.stock > totalQuantity ) && (
        <CounterContainer 
        stock={producto.stock} 
        onAdd={onAdd} 
        initial={totalQuantity} 
        /> 
      )}

      {
        producto.stock === 0 && <h2 style={{display:"flex", justifyContent:"center"}}>No hay stock!</h2>
      }

      {
        typeof(totalQuantity) !== "undefined" && 
        totalQuantity === producto.stock && (
        <h2 style={{display:"flex", justifyContent:"center"}}>Stock agotado!</h2> 
      )}

      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
