import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firabaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

import "./CheckoutContainer.css";
// import CreditCard from "../../common/creditCard/CreditCard";

const CheckoutContainer = () => {

    const [orderId, setOrderId] = useState("")
    const [setCheckoutCompleted] = useState(false);

    const { cart, getTotalPrice, clearCart } = useContext(CartContext)

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

        // const ordersCollection = collection( db, "orders")
        // addDoc(ordersCollection, order).then( res => setOrderId(res.id))

        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((res) => {
            setOrderId(res.id);
            setCheckoutCompleted(true);
        });


        cart.forEach((product) => {
            updateDoc(doc(db, "products", product.id), {
                stock: product.stock - product.quantity,
            });
        });
    };

    const handleContinueShopping = () => {
        clearCart();
    };


    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    };

    const generateMonthOptions = () => {
        const months = [];
        for (let i = 1; i <= 12; i++) {
            months.push(i < 10 ? `0${i}` : `${i}`);
        }
        return months;
    };

    const generateYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i <= currentYear + 10; i++) {
            years.push(i);
        }
        return years;
    };

  return (
    <div className="checkoutContainer">
        <div className="cartColumn">
            <h2 style={{textAlign:"center"}}>Tus productos</h2>
            {cart.map((product) => (
                <div className="productCheckout" key={product.id}>
                    <h4 className="productDesc">{product.title}</h4>
                    <h5 className="productDesc">$ {product.price}</h5>
                    <h5 className="productDesc">unidades: {product.quantity}</h5>
                    <img src={product.img} alt="" />
                </div>
            ))}
            <h5 style={{textAlign:"center", fontSize:"20px"}}>Total de la compra: ${total}</h5>
        </div>
        <div className="formColumn">
        <div className="form-container">
            {orderId ? (
            <div className="order-summary">
            <h1 className="order-title">Compra realizada con éxito!</h1>
            <h3 className="order-subtitle">Gracias por elegirnos</h3>
            <h4>Su número de orden es: {orderId}</h4>
            <div>
                <h3>Resumen de la compra:</h3>
                {cart.map((product) => (
                <div key={product.id}>
                    <h4>{product.title}</h4>
                    <div className="image-container">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio unitario: ${product.price}</p>
                </div>
                ))}
                <h5>Total de la compra: ${total}</h5>
            </div>
            <Link to="/" className="continue-shopping-link" onClick={handleContinueShopping}>Seguir comprando</Link>
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
                            onKeyDown={(e) => {
                                const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"];
                                if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
                                e.preventDefault();
                                }
                            }}
                            onPaste={(e) => {
                                e.preventDefault();
                                const pastedText = e.clipboardData.getData("text/plain");
                                const numericOnly = pastedText.replace(/[^\d]/g, "");
                                document.execCommand("insertText", false, numericOnly);
                            }}
                        />
                    </div>
                    <div className="grupo">
                        <label htmlFor="inputNombre">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            onKeyDown={(e) => {
                                if (/^\d$/.test(e.key)) {
                                e.preventDefault();
                                }
                            }}
                            onPaste={(e) => {
                                e.preventDefault();
                                const pastedText = e.clipboardData.getData("text/plain");
                                const textOnly = pastedText.replace(/\d/g, "");
                                document.execCommand("insertText", false, textOnly);
                            }}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grupo">
                        <label htmlFor="inputTelefono">Teléfono</label>
                        <input
                            type="text"
                            name="phone"
                            inputMode="numeric"
                            pattern="\d*"
                            onKeyDown={(e) => {
                                const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"];
                                if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
                                e.preventDefault();
                                }
                            }}
                            onPaste={(e) => {
                                e.preventDefault();
                                const pastedText = e.clipboardData.getData("text/plain");
                                const numericOnly = pastedText.replace(/[^\d]/g, "");
                                document.execCommand("insertText", false, numericOnly);
                            }}
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
                                    <select name="mes">
                                        <option disabled selected>Mes</option>
                                        {generateMonthOptions().map((month) => (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="grupo-select">
                                    <select name="year">
                                        <option disabled selected>Año</option>
                                        {generateYearOptions().map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
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
        </div>
    </div>
  );
};

export default CheckoutContainer;