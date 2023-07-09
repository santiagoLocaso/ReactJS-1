import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {

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
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
