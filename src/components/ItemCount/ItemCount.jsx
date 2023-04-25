import './ItemCount.css';
import { useState } from "react";

//usestate retorna iun array de dos elementos, el primero es el estado actual y el segundo es una funcion que me actualiza ese estado.

const ItemCount = () => {
    const [contador, setContador] = useState(1);
  //entre parentecios colocamos el valor inicial del estado

  //funciones para incrementar o decremenrar el contador 

    let maximo = 15;

    const incrementar = () => {
      if(contador < maximo){
        setContador(contador + 1)
      }
    }

    const decrementar = () => {
      if(contador > 1){
        setContador(contador - 1)
      }
      
    }

  return (
    <div className='container-counter'>
      <button className='btn-count' onClick={decrementar}> - </button>
      <p>{contador}</p>
      <button className='btn-count' onClick={incrementar}> + </button>

    </div>
  )
}

export default ItemCount
