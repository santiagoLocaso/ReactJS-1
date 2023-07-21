/* eslint-disable react/prop-types */
import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  let arr = [1, 2];

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
            <Skeleton variant="rectangular" width={345} height={200} sx={{ borderRadius: '8px 8px 0 0' }} />
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <Skeleton variant="text" width={160} height={24} sx={{ marginBottom: '8px' }} />
              <Skeleton variant="text" width={200} height={18} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
              <Skeleton variant="rectangular" width={120} height={36} />
            </div>
          </div>
        )})
        }
      </div>
    </div>
  );
};

export default ItemList;
