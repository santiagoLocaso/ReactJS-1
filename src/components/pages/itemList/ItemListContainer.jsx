// const ItemListContainer = ({greeting}) => {
//     return (
//         <>
//             <h1>{greeting}</h1>
//         </>
//     )
// }


// import CounterContainer from "../../common/counter/CounterContainer"

// export default ItemListContainer

// import { useState } from "react"
// import { stock } from "../../../stock"
// import ItemList from "./ItemList"
// import { useEffect } from "react"

// const ItemListContainer = () => {

        // const getData = async () => {
        //     const tarea = new Promise((resolve, reject) => {
        //         resolve("salio todo bien")
        //         // reject("salio todo mal")
        //     })

        //     let data = await tarea
        //     console.log(data);

        //     // tarea
        //     // .then((respuesta) => console.log(respuesta))
        //     // .catch((error) => console.log(error))
        // }

        // getData()

//         const [items, setItems] = useState([])
//         const [error, setError] = useState("")

//         useEffect( () => {
//             const tarea = new Promise((resolve, reject) => {
//                 resolve(stock)
//                 reject("salio todo mal")
//             })
    
//             tarea
//                 .then((respuesta) => setItems(respuesta))
//                 .catch((error) => setError(error))    
//         } , [])


//     return <ItemList items={items} />
// }

// export default ItemListContainer  