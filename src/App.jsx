import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { ItemListConteiner } from "./components/ItemListConteiner/ItemListConteiner"
import { ItemDetailConteiner } from "./components/ItemDetailConteiner/ItemDetailConteiner"
import { ListCategoryConteiner } from "./components/ListCategoryConteiner/ListCategoryConteiner"
import { Cart } from "./components/Cart/Cart"
import "./App.css"  


function App() {
  

  return (
    <>
    <Header/>
      <main>
        <Routes>
          <Route path="/" element = {<ItemListConteiner/>}/>
          <Route path="/cart" element = {<Cart/>}/>
          <Route path="/product/:id" element ={<ItemDetailConteiner/>}/>
          <Route path="/categorias" element={<ListCategoryConteiner/>}/>
          <Route path="/category/:category" element={<ItemListConteiner/>}/>
        </Routes>
      </main>
    <Footer/>
    </>
  )
}
export default App
