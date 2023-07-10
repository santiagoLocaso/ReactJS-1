// import ItemListContainer from "../components/pages/itemList/ItemListContainer";
// import CartContainer from "../components/pages/cart/CartContainer";
import Layout from "../components/layout/Layout";
// import ItemDetail from "../components/pages/itemDetail/ItemDetail";
// import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
    <Route element={<Layout />}>
        {routes.map(({ id, path, Element}) =>(
            <Route key={id} path={path} element={<Element/>}/>
        ))}
      {/* <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryName" element={<ItemListContainer />} />
      <Route path="/itemDetail/:id" element={<ItemDetail />} />
      <Route path="/cart" element={<CartContainer />} />
      <Route path="/checkout" element={<CheckoutContainer />} /> */}
    </Route>

    <Route path="*" element={<h1>404 not found</h1>} />
  </Routes>
  )
}

export default AppRouter