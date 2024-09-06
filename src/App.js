import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemsListContainer/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App(){
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer />}/>
                    <Route path="category/:categoryId" element={<ItemListContainer />}/>
                    <Route path='item/:itemId' element={<ItemDetailContainer />}/>
                    <Route path="*" element={<h1>404 Pagina no encontrada</h1>}/>
                </Routes>     
            </BrowserRouter>
        </div>
    )
}
export default App;