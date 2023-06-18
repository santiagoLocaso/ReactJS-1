import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { BsFillCartCheckFill } from 'react-icons/bs';

const CartWidget = () => {
    return (
        // <div style={{display: "flex", justifyContent: "flex-end", paddingRight: "35px", paddingBottom: "20px"}}>
        //     <BsFillCartCheckFill color='red' size={40}/>
        // </div>

        <div style={{display: "flex", justifyContent: "flex-end", paddingRight: "35px", paddingBottom: "20px"}}>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon color='black' />
            </Badge>
        </div>
    )
}

export default CartWidget