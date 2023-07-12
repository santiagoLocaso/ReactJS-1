/* eslint-disable react/prop-types */
//Componente global

//crear contexto con el mismo nombre del archivo
import { createContext, useState } from "react"
//este es el estado global
export const CartContext = createContext()

//componente proveedor del contexto
const CartContextComponent = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {

        const existe = isInCart(item.id)
        if(existe) {
            let newArray = cart.map((element)=>{
                if (element.id === item.id){ //elemento que quiero modificar
                    return {...element, quantity: element.quantity + item.quantity} //elemento modificado en nuevo objeto sumando la cantidad nueva
                }else {
                    return element //elemento
                }
            })

            setCart(newArray)
        }else {
            setCart([...cart, item])
        }

    }

    const clearCart = () => {
        setCart([])
    }

    const deleteById = (id) => {
        let newArray = cart.filter( (element) => element.id !== id)
        setCart(newArray)
    }

    const isInCart = (id) =>{
        let exist = cart.some( (element) => element.id === id)
        return exist
    }

    let data = { cart, addToCart, clearCart, deleteById }

  return <CartContext.Provider value={ data }>{children}</CartContext.Provider>
}

export default CartContextComponent