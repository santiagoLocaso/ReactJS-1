const Counter = ( {contador, sumar, restar, onAdd} ) => {

  return (
    <div style={{padding: "40px", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <button onClick={sumar} style={{ 
          backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer',
          }}>
            sumar
        </button>
        <h3>{contador}</h3>
        <button onClick={restar} style={{ 
          backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer',
          }}>
            restar
        </button>
        <button onClick={()=>onAdd(contador)} style={{ 
          backgroundColor: 'blue', color: 'white', padding: '10px 20px', margin:"15px", borderRadius: '5px', border: 'none', cursor: 'pointer',
          }}>
            Agregar al carrito
        </button>
    </div>
  )
}

export default Counter