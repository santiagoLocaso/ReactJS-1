import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
// import Swal from 'sweetalert2';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = () => {

  const {addToCart, getQuantityById} = useContext(CartContext)

  
  const [producto, setProducto] = useState({});
  
  const {id} = useParams()
  const navigate= useNavigate()

  const totalQuantity = getQuantityById(id)

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado)
    });
    tarea.then(res => setProducto(res) )

  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = {...producto, quantity:cantidad}
    addToCart(productCart)
    // //alert
    // Swal.fire({
    //   position: 'center',
    //   icon: 'success',
    //   title: 'Producto agregado al carrito!',
    //   showConfirmButton: false,
    //   timer: 1500
    // })

    //toast
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

      <CounterContainer stock={producto.stock} onAdd={onAdd} initial={totalQuantity} />
      {/* llamar al componente del toast para que funcione*/}
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
