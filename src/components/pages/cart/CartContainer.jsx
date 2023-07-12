import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const CartContainer = () => {

  const {cart, clearCart, deleteById } = useContext(CartContext)
  
  return (
      <div>
          <h1>Carritoooo</h1>

          {
            cart.map((element)=> {
              return <div key={element.id}>
                <h4>{element.title}</h4>
                <h5>{element.price}</h5>
                <h5>{element.quantity}</h5>
                <button onClick={()=>deleteById(element.id)}>eliminar</button>
              </div>
            })
          }

          <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    )
}
  
export default CartContainer