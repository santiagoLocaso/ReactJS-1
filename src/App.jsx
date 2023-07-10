// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
// import ItemListContainer from "./components/pages/itemList/ItemListContainer";
// import CartContainer from "./components/pages/cart/CartContainer";
// import Layout from "./components/layout/Layout";
// import ItemDetail from "./components/pages/itemDetail/ItemDetail";
// import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      {/* <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;