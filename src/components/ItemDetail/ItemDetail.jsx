import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>Id: {id}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatibus vel iure eos commodi voluptate repellendus. Repudiandae libero nulla nam eius, quis quam quod quibusdam voluptate perspiciatis nisi recusandae suscipit.</p>
      <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail
