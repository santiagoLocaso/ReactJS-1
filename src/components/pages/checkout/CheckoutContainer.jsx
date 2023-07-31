// import { useContext, useState } from "react"
// import { CartContext } from "../../../context/CartContext";
// import { db } from "../../../firabaseConfig";
// import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
// import { Link } from "react-router-dom";

// import "./CheckoutContainer.css";

// const CheckoutContainer = () => {

//     const [orderId, setOrderId] = useState("")

//     const requiredFields = ["name", "phone", "email"];

//     const { cart, getTotalPrice } = useContext(CartContext)

//     const [data, setData] = useState({
//         name: "",
//         phone: "",
//         email: ""
//     })

//     const [showError, setShowError] = useState(false);

//     let total = getTotalPrice()

//     const handleSubmit = (event) => {
//         event.preventDefault()

//         if (!data.name || !data.phone || !data.email) {
//             setShowError(true);
//             return;
//           }

//         let order = {
//             buyer: data,
//             items: cart,
//             total,
//             date: serverTimestamp()
//         }

//         const ordersCollection = collection( db, "orders")
//         addDoc(ordersCollection, order).then( res => setOrderId(res.id))


//         cart.forEach( (product) => {
//             updateDoc( doc(db, "products", product.id) , {stock: product.stock - product.quantity})
//         });
//     };


//     const handleChange = (event) => {
//         setData({...data, [event.target.name]: event.target.value})
//         setShowError(false);
//     };


//   return (
//     <div className="checkout-container">

//         {orderId ? (
//             <div className="order-summary">
//                 <h1>Compra realizada con exito!</h1>
//                 <h3>Gracias por elegirnos!</h3>
//                 <h4>Su numero de orden es: {orderId}</h4>
//                 <Link to="/" className="continue-shopping-link">Seguir comprando</Link>
//             </div>
//             ) : (
//                 <form className="checkout-form" onSubmit={handleSubmit}>
//                 <h1 className="checkout-title">Finalizar compra</h1>
//                 {requiredFields.map((field) => (
//                   <div className="form-group" key={field}>
//                     <label className="form-label" htmlFor={field}>
//                       {field.charAt(0).toUpperCase() + field.slice(1)}*
//                     </label>
//                     <input
//                       className="checkout-input"
//                       type="text"
//                       placeholder={`Ingrese su ${field}`}
//                       name={field}
//                       onChange={handleChange}
//                       value={data[field]} // Asignamos el valor del campo a data[field]
//                     />
//                     {data[field] === "" && (
//                       <span className="error-message">*</span>
//                     )}
//                   </div>
//                 ))}
//                 {showError && <div className="error-message">Por favor, complete todos los campos obligatorios.</div>}
//                 <button className="checkout-button" type="submit">Comprar</button>
//               </form>
//         )}
//     </div>
//   )
// }

// export default CheckoutContainer

import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firabaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

import "./CheckoutContainer.css";
// import CreditCard from "../../common/creditCard/CreditCard";

const CheckoutContainer = () => {

    const [orderId, setOrderId] = useState("")

    const { cart, getTotalPrice } = useContext(CartContext)

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: ""
    })

    let total = getTotalPrice()

    const handleSubmit = (event) => {
        event.preventDefault()

        let order = {
            buyer: data,
            items: cart,
            total,
            date: serverTimestamp()
        }

        const ordersCollection = collection( db, "orders")
        addDoc(ordersCollection, order).then( res => setOrderId(res.id))


        cart.forEach((product) => {
            updateDoc(doc(db, "products", product.id), {
                stock: product.stock - product.quantity,
            });
        });
    };


    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    };

  return (
    <div className="form-container">
        {orderId ? (
        <div className="order-summary">
          <h1>Compra realizada con exito!</h1>
          <h3>Gracias por elegirnos!</h3>
          <h4>Su numero de orden es: {orderId}</h4>
          <Link to="/" className="continue-shopping-link">Seguir comprando</Link>
        </div>
      ) : ( 
        <div>
          {/* <div className="tarjeta" id="tarjeta">
            <CreditCard />
          </div> */}

          <form className="formulario-tarjeta" onSubmit={handleSubmit}>
                <div className="grupo">
                    <label htmlFor="inputNumero">Número Tarjeta</label>
                    <input
                        type="text"
                        maxLength="19"
                        autoComplete="off"
                        name="numeroTarjeta"
                        onChange={(e) => setData({ ...data, numeroTarjeta: e.target.value })}
                    />
                </div>
                <div className="grupo">
                    <label htmlFor="inputNombre">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                <div className="grupo">
                    <label htmlFor="inputTelefono">Teléfono</label>
                    <input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                    />
                </div>
                <div className="grupo">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="flexbox">
                    <div className="grupo expira">
                        <label htmlFor="selectMes">Expiración</label>
                        <div className="flexbox">
                            <div className="grupo-select">
                                {/* <select name="mes" id="selectMes" onChange={(e) => setData({ ...data, expiracion: e.target.value })} value={data.expiracion}>
                                    <option disabled selected>Mes</option>
                                </select> */}
                                <select name="mes" onChange={handleChange}>
                                    <option disabled selected>Mes</option>
                                    {/* Opciones para el mes */}
                                </select>
                            </div>
                            <div className="grupo-select">
                                {/* <select name="year" id="selectYear" onChange={(e) => setData({ ...data, expiracion: e.target.value })} value={data.expiracion}>
                                    <option disabled selected>Año</option>
                                </select> */}
                                <select name="year" onChange={handleChange}>
                                    <option disabled selected>Año</option>
                                    {/* Opciones para el año */}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grupo ccv">
                        <label htmlFor="inputCCV">CCV</label>
                        <input
                            type="text"
                            maxLength="3"
                            name="ccv"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className="btn-enviar">
                    Finalizar compra
                </button>
            </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutContainer;