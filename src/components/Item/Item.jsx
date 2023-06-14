import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <div className='cardBody'>
                <h3>Nombre: {nombre}</h3>
                <p>Precio: ${precio} </p>
                
            </div>
            
            <Link className='btnProducto'  to={`/item/${id}`}>Ver Detalles</Link>
        </div>
    )
}

export default Item