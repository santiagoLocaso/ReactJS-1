/* eslint-disable react/prop-types */
import Add from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import "./Counter.css";

const Counter = ( {contador, sumar, restar, onAdd} ) => {

  // const handleAddToCart = () => {
  //   sumar();
  //   onAdd(contador);
  // };

  return (
    <div style={{padding: "40px", display:"flex",justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <button className='restButton' onClick={restar}>
            <HorizontalRuleIcon />
        </button>
        <h3 style={{padding:"5px"}}>{contador}</h3>
        <button className='addProduct' onClick={sumar}>
            <Add />
        </button>
        <button className="agregarCarrito" onClick={()=>onAdd(contador)}>
        {/* <button className="agregarCarrito" onClick={handleAddToCart}> */}
            {<AddShoppingCartIcon />} Comprar
        </button>
    </div>
  )
}

export default Counter