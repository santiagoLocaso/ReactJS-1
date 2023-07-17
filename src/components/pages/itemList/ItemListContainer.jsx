import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// import PacmanLoader from "react-spinners/PacmanLoader";

// const stylesLoader = {
//   display:"block"
// };

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { categoryName } = useParams();

  useEffect(() => {
    let productsFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName === undefined ? products : productsFiltrados);
      }, 500)
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, [categoryName]);

  // if (items.length === 0) {
  //   return <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
  //   <PacmanLoader 
  //   color="red" 
  //   cssOverride={stylesLoader}
  //   size={20}
  //   />
  //   </div>
  // }

  // return <ItemList items={items} />;

  return <>
    {
      <ItemList items={items} />
    }
  </>
};

export default ItemListContainer;
