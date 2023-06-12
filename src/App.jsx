//importacion con export default (se puede importar con el nombre que yo quiera)
// import Navbar from "./Navbar";
//importacion con export nombrado con el nombre de la funcion entre llaves 
// import { Footer } from "./Footer";

// import { Navbar } from "./components/layout/navbar/Navbar";

// function App() {
//   return <div>
//     <h1>Hola mundo</h1>

//     <Navbar /> {/*esto es el equivalente a llamar a una funcion de js Navbar()*/}
//     <Footer />
//   </div>;
// }

// export default App

import { Navbar } from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";

function App() {
  return <div>
    <Navbar />
    <Home />
    <Cart />
  </div>;
}

export default App
