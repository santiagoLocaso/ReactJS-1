import CartWidget from '../../common/cartWidget/CartWidget'

const Navbar = () => {
    return (
        <div>
            <ul style={{display: "flex", justifyContent: "center",flexDirection: "row", listStyle:"none"}}>
                <li style={{padding: "0 15px"}}><a href="" style={{textDecoration: "none", color: "black"}}>Inicio</a></li>
                <li style={{padding: "0 15px"}}><a href="" style={{textDecoration: "none", color: "black"}}>Productos</a></li>
                <li style={{padding: "0 15px"}}><a href="" style={{textDecoration: "none", color: "black"}}>Nosotros</a></li>
                <li style={{padding: "0 15px"}}><a href="" style={{textDecoration: "none", color: "black"}}>Contacto</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default Navbar