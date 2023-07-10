import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ItemDetail from "../components/pages/itemDetail/ItemDetail";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "category",
        path: "/category/:categoryName",
        Element: ItemListContainer
    },
    {
        id: "detalle",
        path: "/itemDetail/:id",
        Element: ItemDetail
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },
]