/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextComponent = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {

        const existe = isInCart(item.id)
        if(existe) {
            let newArray = cart.map((element)=>{
                if (element.id === item.id){
                    return {...element, quantity: item.quantity}
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

    const getTotalPrice = () => {
        let total = cart.reduce( (acc, element) => {
            return acc + (element.price * element.quantity)
        }, 0)
        return total
    }

    const getTotalQuantity = () => {
        let total = cart.reduce( (acc, element) => {
            return acc + (element.quantity)
        }, 0)
        return total
    }

    const getQuantityById = (id) => {
        const product = cart.find((element) => element.id === id)
        return product?.quantity
    }

    let data = { cart, addToCart, clearCart, deleteById, getTotalPrice, getTotalQuantity, getQuantityById}

  return <CartContext.Provider value={ data }>{children}</CartContext.Provider>
}

export default CartContextComponent