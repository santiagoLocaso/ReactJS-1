import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

import "./CartContainer.css"

const CartContainer = () => {

  const {cart, clearCart, deleteById } = useContext(CartContext)
  
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

          <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    )
}
  
export default CartContainer