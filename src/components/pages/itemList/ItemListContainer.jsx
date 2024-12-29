import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { supabase } from "../../../supabaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para la carga
  const [error, setError] = useState(null); // Estado para el error
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true); // Set loading to true before fetching

      let query = supabase.from("products").select("*"); // Base query

      // Filtrar por categoría si está presente
      if (categoryName) {
        query = query.eq("category", categoryName); // eq: "equal to"
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching products:", error);
        setError(error.message); // Set error message in state
      } else {
        setItems(data); // Set fetched products
      }

      setIsLoading(false); // Set loading to false after fetch is done
    };

    fetchItems();
  }, [categoryName]);

  if (isLoading) {
    return <p>Loading products...</p>; // Puedes mostrar un mensaje de carga o un spinner
  }

  if (error) {
    return <p>Error: {error}</p>; // Si ocurre un error, muestra un mensaje
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;



// import { useState, useEffect } from "react";
// import ItemList from "./ItemList";
// import { useParams } from "react-router-dom";
// import { db } from "../../../firabaseConfig";
// import { getDocs, collection, query, where } from "firebase/firestore";

// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);

//   const { categoryName } = useParams();

//   useEffect(() => {

//     let productsCollection = collection(db, "products")
    
//     let consulta;
//     if(categoryName){
//       consulta = query( productsCollection, where("category", "==", categoryName))
//     }else{
//       consulta = productsCollection
//     }

//     getDocs(consulta).then((res) => {
//       let products = res.docs.map( doc => {
//         return {...doc.data(), id: doc.id}
//       })
//       setItems(products)
//     })

//   }, [categoryName]);


//   return <>
//     {
//       <ItemList items={items} />
//     }
//   </>
// };

// export default ItemListContainer;