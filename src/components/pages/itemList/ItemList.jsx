import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import { useState, useEffect } from "react";
import { supabase } from "../../../supabaseConfig";

const ItemList = ({ items }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Si 'items' es null o aún no se cargaron los productos, mostramos un loading
  useEffect(() => {
    if (Array.isArray(items) && items.length > 0) {
      setIsLoading(false);
    }
  }, [items]);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        Nuestros productos
      </h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {isLoading ? (
          // Mostrar skeletons mientras los productos están cargando
          Array(6)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <Skeleton
                  variant="rectangular"
                  width={345}
                  height={200}
                  sx={{ borderRadius: "8px 8px 0 0" }}
                />
                <div style={{ padding: "16px", textAlign: "center" }}>
                  <Skeleton
                    variant="text"
                    width={160}
                    height={24}
                    sx={{ marginBottom: "8px" }}
                  />
                  <Skeleton variant="text" width={200} height={18} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "8px" }}>
                  <Skeleton variant="rectangular" width={120} height={36} />
                </div>
              </div>
            ))
        ) : (
          // Mostrar productos cuando ya están cargados
          Array.isArray(items) && items.length > 0 ? (
            items.map((elemento) => {
              return <ProductCard key={elemento.id} elemento={elemento} />;
            })
          ) : (
            <p>No se encontraron productos</p>
          )
        )}
      </div>
    </div>
  );
};

export default ItemList;




// /* eslint-disable react/prop-types */
// import { Skeleton } from "@mui/material";
// import ProductCard from "../../common/productCard/ProductCard";
// import {products} from "../../../productsMock";

// const ItemList = ({ items }) => {
//   let arr = [products];

//   return (
//     <div>
//       <h1 style={{display: "flex", justifyContent: "center", padding: "20px" }}>Nuestros productos</h1>

//       <div
//         style={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "space-evenly",
//           flexWrap: "wrap",
//         }}
//       >
//         {items.length > 0 
//           ? items.map((elemento) => {
//             return <ProductCard key={elemento.id} elemento={elemento} />;
//         }) 
//         : arr.map((e) => {
//           return (
//           <div key={e}>
//             <Skeleton variant="rectangular" width={345} height={200} sx={{ borderRadius: '8px 8px 0 0' }} />
//             <div style={{ padding: '16px', textAlign: 'center' }}>
//               <Skeleton variant="text" width={160} height={24} sx={{ marginBottom: '8px' }} />
//               <Skeleton variant="text" width={200} height={18} />
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
//               <Skeleton variant="rectangular" width={120} height={36} />
//             </div>
//           </div>
//         )})
//         }
//       </div>
//     </div>
//   );
// };

// export default ItemList;
