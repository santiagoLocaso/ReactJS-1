import CartWidget from '../../common/cartWidget/CartWidget'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default Navbar