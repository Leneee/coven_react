import './Item.css'

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <div className='cardBody'>
                <h3>Nombre: {nombre}</h3>
                <p>Precio: ${precio} </p>
                
            </div>
            <button className='btnProducto'> Ver Detalles </button>
        </div>
    )
}

export default Item