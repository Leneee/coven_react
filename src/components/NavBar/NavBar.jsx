import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <header>
      <h1>Coven Manairum</h1>
      <nav>
        <ul>
          <li className='item'>Proteccion</li>
          <li className='item'>Eventos</li>
          <li className='item'>Joyeria</li>
        </ul>
      </nav>
      <CardWidget/>
    </header>
  )
}

export default NavBar
