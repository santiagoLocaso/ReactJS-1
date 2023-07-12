import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";


const ItemDetail = () => {

  const {addToCart} = useContext(CartContext)

  const [producto, setProducto] = useState({});

  const {id} = useParams()
    const navigate= useNavigate()


  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado)
    });
    tarea.then(res => setProducto(res) )

  }, [id]);

  const onAdd = (cantidad) => {
    producto
    cantidad
    let productCart = {...producto, quantity:cantidad}

    addToCart(productCart)
  };

  return (
    <div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2>{producto.title}</h2>
        <img src={producto.img} alt={producto.title} />
        <h4>{producto.price}</h4>
      </div>

      <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
