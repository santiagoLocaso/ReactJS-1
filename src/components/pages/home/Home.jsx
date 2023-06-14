// hooks funciones que trabajan con react que solucionan algunos problemas 

// useState

import { useState } from "react"

const Home = () => {
    // Dentro de este espacio hasta el return se puede usar paar escribir codigo JS
    // const sumar = () => {
    //     return 2 + 2
    // }
    // let nombre = "pepe"

    //------------------------------------------------------------------------------

    //ESTADOS
    //no importa el nombre que se les de siempre van en orden primero la variable y luego la funcion
    const [contador, setContador] = useState(0) // [ Variable, funcion que modifica esa variable]

    // const sumar = () => { 
    //     setContador( contador + 1) //la funcion sola se encarga de cambiar el valor solo hay que indicarle cuanto vale
    // }

    //------------------------------------------------------------------------------

    // let contador = 0

    // const sumar = () => {
    //     contador += 1
    // }

    return (
        <>
            {/* <h1>hola {nombre}</h1> dentro de las llaves {} se pueden utilizar funciones de JS */}
            <h1>Este es el home</h1>
            <h3>El contador esta en {contador}</h3>
            {/* Cuando algo en o el componente cambia(muta) el dom se vuelve a renderizar */}
            <button onClick={() => setContador(contador + 1)}>Sumar contador</button>
        </>
    )
}

export default Home