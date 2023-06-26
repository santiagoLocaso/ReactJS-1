import ProductCard from '../../common/productCard/ProductCard';


const ItemList = ( {items} ) => {
    // console.log("LLEGO",items);
    // console.log({items});
  return (
    <div>
        <h1>productos</h1>
    
    <div style={{width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
        {items.map( (item) => {
            return (
            // <section key={item.id}>
            //     <div>
            //         <h2>{item.nombre}</h2>
            //         <h3>{item.precio}</h3>
            //         <img src={item.img} alt="" />
            //     </div>
            // </section>
                <ProductCard  key={item.id} item={item} isInItemList={true}/>
            )
        })}
    </div>
    
    </div>
  )
}

export default ItemList