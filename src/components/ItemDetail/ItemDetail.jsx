import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link  } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio}; 
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <div className='imgContainer'>
        <img src={img} className='imgItem' alt={nombre} />
      </div>
      
      <div className='itemDescription'>
        <h1>{nombre}</h1>
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
        <h3>Precio: {precio}</h3>
        <h3>Id: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatibus vel iure eos commodi voluptate repellendus. Repudiandae libero nulla nam eius, quis quam quod quibusdam voluptate perspiciatis nisi recusandae suscipit.</p>
        
      </div>      
     
    </div>
  )
}

export default ItemDetail
