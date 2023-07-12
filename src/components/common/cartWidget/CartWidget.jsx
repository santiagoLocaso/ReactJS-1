import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
// import { BsFillCartCheckFill } from 'react-icons/bs';

const CartWidget = () => {

    const {cart} = useContext(CartContext)

    return (
        // <div style={{display: "flex", justifyContent: "flex-end", paddingRight: "35px", paddingBottom: "20px"}}>
        //     <BsFillCartCheckFill color='red' size={40}/>
        // </div>
        <Link to="/cart">
                <div style={{display: "flex", justifyContent: "flex-end", paddingRight: "35px", paddingBottom: "20px"}}>
                    <Badge badgeContent={cart.length} color="primary">
                        <ShoppingCartIcon color='black' />
                    </Badge>
                </div>
        </Link>
    )
}

export default CartWidget