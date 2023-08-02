import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

import "./CartWidget.css"

const CartWidget = () => {

    const {getTotalQuantity} = useContext(CartContext)
    let total = getTotalQuantity()
    return (
        <>
            <Link to="/cart">
                <div className="cart">
                    <Badge badgeContent={total} color="primary">
                        <ShoppingCartIcon style={{color:"black"}} fontSize='large'/>
                    </Badge>
                </div>
            </Link>
        </>

    )
}

export default CartWidget