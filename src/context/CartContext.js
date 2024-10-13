import { createContext, useState } from "react";

export const CartContext = createContext({
    carrito: []
})

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarItem = (item, cantidad) => {
        if(!estaEnCarrito(item.id)){
            setCarrito(prev => [...prev, {...item, cantidad}])
        }
        else{
            console.log('El producto ya esta en el carrito')
        }
    }

    const removerProducto = (itemId) => {
        const carritoModificado = carrito.filter(prod => prod.id !== itemId)
        setCarrito(carritoModificado)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (itemId) => {
        return carrito.some(prod => prod.id === itemId)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const cantidadTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    return(
        <CartContext.Provider value={{ carrito, agregarItem, removerProducto, vaciarCarrito, precioTotal, cantidadTotal}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;