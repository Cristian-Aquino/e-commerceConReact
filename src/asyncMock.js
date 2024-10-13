const productos =[
    {id: '1',nombre: 'Misborn',precio: 5000,categoria: 'libro',img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/d1/20/d120d3974e8cec866f4faa4f93553e8a.jpg',stock: 5,descripcion: 'Libro 1 de la saga Misborn'},
    {id: '2',nombre: 'El camino de los reyes',precio: 2000,categoria: 'libro',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYjaxvFqoOOEIEroJMhOQ-xsLXFqgIJvzxw&s',stock: 5,descripcion: 'Libro 1 de la saga El archivo de las tormentas'},
    {id: '3',nombre: 'Comic La Rueda del Tiempo',precio: 2300,categoria: 'comic',img: 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/118/m_libros/117444_portada_la-rueda-del-tiempo-novela-grafica_robert-jordan_202107141431.jpeg',stock: 15,descripcion: 'Comic de La rueda del tiempo'},
    {id: '4',nombre: 'Manga Elden Ring',precio: 3250,categoria: 'comic',img: 'https://www.normaeditorial.com/upload/media/albumes/0001/27/thumb_26208_albumes_medium.jpeg',stock: 5,descripcion: 'El tomo 1 del manga de Elden Ring'},
    {id: '5',nombre: 'Bufanda de Harry Potter',precio: 800,categoria: 'accesorio',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDk23oJ9sO1VcAhLM0_QSOnsyemT9C7MQAg&s',stock: 15,descripcion: 'Bufanda de la casa Gryffindor'},
    {id: '6',nombre: 'Figura de Artorias del Abismo',precio: 5950,categoria: 'accesorio',img: 'https://m.media-amazon.com/images/I/51e1ed5NYeS._AC_UF894,1000_QL80_.jpg',stock: 2,descripcion: 'Artorias del Abismom, de la saga Dark Souls'},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductoById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(producto => producto.id === productoId))
            console.log(resolve)
        }, 500)
    })
}

export const getProductosByCategoria = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(producto => producto.categoria === categoryId))
        }, 500)
    })
}