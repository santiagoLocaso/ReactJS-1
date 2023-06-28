import { useState, useEffect } from "react"

const FetchingData = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        let promesa = fetch("https://jsonplaceholder.typicode.com/users") //por defecto la peticion es tipo GET
    
        promesa
            .then( (res) => res.json())
            .then( (res) => setUsers(res))
            .catch( (err) => console.log(err))
            .finally( () => console.log("termino proceso"))
    }, [])


      const createUser = () => {
            let newUser =   {
        "name": "Santiago Rodriguez",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }

      let promesa = fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Autorization" :"Barer dasdADSAFASRfsdSDGFDSF343",
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(newUser)
      })

      promesa.then((res) => console.log(res)).catch((err) => console.log(err))
    }

    const deleteUser = ( id ) => {
        fetch(`https://jsonplaceholder.typicode.com/users${id}`, {method: "DELETE"})
    }



  return (
    <div>
        <h1>FetchingData</h1>

        <button onClick={createUser}>crear nuevo usuario</button>
        <button onClick={()=>deleteUser(2)}>eliminar usuario</button>
    </div>
  )
}

export default FetchingData