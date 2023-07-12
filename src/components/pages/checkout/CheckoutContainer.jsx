import { useState } from "react"

const CheckoutContainer = () => {

    const [data, setData] = useState({
        nombre: "",
        apellido: "",
    })

    const enviarForm = (event) => {
        event.preventDefault()
        console.log("se envio")
        console.log(event);
        console.log(data);
    };


    const capturarInfo = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    };


  return (
    <div>
        <h1>Checkout</h1>
        <form onSubmit={enviarForm}>
            <input type="text" placeholder="Ingrese su nombre" name="nombre" onChange={capturarInfo} />
            <input type="text" placeholder="Ingrese su apellido" name="apellido"  onChange={capturarInfo}/>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default CheckoutContainer