import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import "./CartContainer.css"
import Swal from "sweetalert2"
import { Link } from "react-router-dom";

const CartContainer = () => {

  const {cart, clearCart, deleteById, getTotalPrice} = useContext(CartContext)

  let total = getTotalPrice()

  const vaciar = () => {
    Swal.fire({
      title: '¿Vaciar el carrito?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Productos eliminados!', '', 'success')
      }
    })
  }
  
  return (
    <div className="cartSection">
      {cart.length === 0 ? (
        <h3>El carrito está vacío</h3>
        ) : (
          <>
          {cart.map((element) => {
            return (
              <div className="cartContainer" key={element.id}>
                <h4 className="productDesc">{element.title}</h4>
                <h5 className="productDesc">$ {element.price}</h5>
                <h5 className="productDesc">{element.quantity}</h5>
                <img src={element.img} alt="" />
                <button onClick={() => deleteById(element.id)}>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                </button>
              </div>
            );
          })}

            <button className="vaciar" onClick={vaciar}>
              Vaciar carrito
            </button>

            <h5 style={{ fontSize: "20px" }}>Total de la compra: ${total}</h5>
            
            {cart.length > 0 && (
              <div className="checkoutButtonContainer">
                <Link to={"/checkout"} className="checkoutButton">
                  Finalizar compra
                </Link>
              </div>
            )}
          </>
        )}
    </div>
    )
}
  
export default CartContainer