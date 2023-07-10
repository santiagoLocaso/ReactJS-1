import { useState } from "react"

const CheckoutContainer = () => {

    // const [nombre, setNombre] = useState("");
    // const [apellido, setApellido] = useState("");

    const [data, setData] = useState({
        nombre: "",
        apellido: "",
    })

    const enviarForm = (event) => {
        event.preventDefault()
        console.log("se envio")
        console.log(event);
        // const datos = {
        //     nombre,
        //     apellido
        // }
        // console.log(datos);
        // AXIOS.POST(URL, DATOS) rquest al backend
        console.log(data);
    };


    const capturarInfo = (event) => {
        // setNombre(event.target.value)
        setData({...data, [event.target.name]: event.target.value})
    };

    // const capturarNombre = (event) => {
    //     // setNombre(event.target.value)
    //     setData({...data,nombre: event.target.value})
    // };

    // const capturarApellido = (event) => {
    //     // setApellido(event.target.value)
    //     setData({...data, apellido: event.target.value})
    // };

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