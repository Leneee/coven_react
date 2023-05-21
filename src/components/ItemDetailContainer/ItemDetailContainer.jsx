import {useState, useEffect} from 'react'
import { getProducto } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {idItem} = useParams();

    useEffect( () => {
        getProducto(idItem)
            .then(res => setProducto(res));
    }, [idItem])

  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer