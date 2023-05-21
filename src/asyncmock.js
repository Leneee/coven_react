const productos = [
    { nombre: "Saumerio", precio: 500, id: 1, img: "../img/hierbas.jpg", idCat: "1" },
    { nombre: "Amatista en Bruto", precio: 180, id: 2, img: "../img/amatista3.jpg", idCat: "1" },
    { nombre: "Circulo de mujeres", precio: 200, id: 3, img: "../img/evento.jpg", idCat: "2" },
    { nombre: "Anillos de piedra luna", precio: 900, id: 4, img: "../img/anillos2.jpg", idCat: "3" },
    { nombre: "Salvia", precio: 80, id: 5, img: "../img/salvia.jpeg", idCat: "1" },
    { nombre: "Collares de Amatista", precio: 700, id: 6, img: "../img/collar.jpg", idCat: "3 " }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const getProductosPorCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(getProductosPorCategoria);
        }, 100)
    })
}

