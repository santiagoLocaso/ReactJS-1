/* eslint-disable react/prop-types */
import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <h1 style={{display: "flex", justifyContent: "center", padding: "20px" }}>Nuestros productos</h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.length > 0 
          ? items.map((elemento) => {
            return <ProductCard key={elemento.id} elemento={elemento} />;
        }) 
        : arr.map((e) => {
          return (
          <div key={e}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rectangular" width={100} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />  
          </div>
        )})
        }
      </div>
    </div>
  );
};

export default ItemList;
