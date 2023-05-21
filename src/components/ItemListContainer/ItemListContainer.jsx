import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))


  }, [idCategoria])

  return (
    <div className='item-list-container'>
      <h2 className='title'>Productos</h2>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer
