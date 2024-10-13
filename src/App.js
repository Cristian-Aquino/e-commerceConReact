import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemsListContainer/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './context/CartContext';
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout'

function App(){
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer />}/>
                        <Route path="category/:categoriaId" element={<ItemListContainer />}/>
                        <Route path='item/:itemId' element={<ItemDetailContainer />}/>
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="*" element={<h1>404 Pagina no encontrada</h1>}/>
                    </Routes> 
                </CartProvider>    
            </BrowserRouter>
        </div>
    )
}
export default App;