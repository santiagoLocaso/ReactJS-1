import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

import "./CartContainer.css"
import Swal from "sweetalert2"

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
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Productos eliminados!', '', 'success')
      }
    })
  }
  
  return (
      <div className="cartSection">

          {
            cart.map((element)=> {
              return <div className="cartContainer" key={element.id}>
                
                <h4 className="productDesc">{element.title}</h4>
                <h5 className="productDesc">$ {element.price}</h5>
                <h5 className="productDesc">{element.quantity}</h5>
                <img src={element.img} alt="" />
                <button onClick={()=>deleteById(element.id)}>eliminar</button>
              </div>
            })
          }

          {
            cart.length > 0 && <button onClick={vaciar}>Vaciar carrito</button>
          }

          <h5>Total de la compra: ${total}</h5>

      </div>
    )
}
  
export default CartContainer