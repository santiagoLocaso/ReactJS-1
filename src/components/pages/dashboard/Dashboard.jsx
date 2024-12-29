import { supabase } from "../../../supabaseConfig";

import { products } from "../../../productsMock";

const Dashboard = () => {
  const rellenar = async () => {
    for (const product of products) {
      const { error } = await supabase.from("products").insert([product]);
      if (error) {
        console.error("Error al insertar el producto:", product, error);
      } else {
        console.log("Producto insertado:", product);
      }
    }
  };

  return (
    <div>
      <button onClick={rellenar}>Rellenar base de datos</button>
    </div>
  );
};

export default Dashboard;


// import { db } from "../../../firabaseConfig";
// import {products} from "../../../productsMock";
// import { addDoc, collection } from "firebase/firestore";

// const Dashboard = () => {
  
//     const rellenar = () => {
//         products.forEach( (product) => {
//             let refCollection = collection(db, "products")
//             addDoc(refCollection, product)
//         })
//     }

//     return (
//     <div>
//         <button onClick={rellenar}>Rellenar base de datos</button>
//     </div>
//   )
// }

// export default Dashboard