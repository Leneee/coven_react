import './Vista.css'
import { useState } from 'react'

const Vista = () => {
  const [modoOscuro, setModoOscuro] = useState(false)

  const cambiarModo = () => {
    setModoOscuro(!modoOscuro);
  }

  const estilo = modoOscuro ? "oscuro" : "claro"

  return (
    <div className='mode'>
      <button onClick={ cambiarModo }>{ modoOscuro ? "Claro" : "Oscuro" }</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rerum. Harum, temporibus delectus natus molestias incidunt voluptatibus fuga tenetur, dolore reprehenderit quaerat distinctio in, tempora dolor voluptas sapiente! Maiores, aut!</p>
    </div>
  )
}

export default Vista
