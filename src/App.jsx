import Navbar from "./components/layout/navbar/NavBar"
// import Home from "./components/pages/home/Home"
import ItemListContainer from "./components/pages/itemList/ItemListContainer.jsx"

function App() {
  return (
    <div>
      {/* <Home />*/}
      <ItemListContainer greeting={"Tecno-Lomas"} />
      <Navbar />
    </div>
  )
}

export default App
