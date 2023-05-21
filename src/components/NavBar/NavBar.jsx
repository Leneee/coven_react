import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <h1>Coven Manairum</h1>
      <nav>
        <ul>
          <li className='item'>
            <NavLink to={`/categoria/1`} > Proteccion </NavLink>
          </li>
          <li className='item'>
            <NavLink to={`/categoria/2`} > Eventos </NavLink>
          </li>
          <li className='item'>
            <NavLink to={`/categoria/3`} > Joyeria </NavLink>
          </li>
          
        </ul>
      </nav>
      <CardWidget/>
    </header>
  )
}

export default NavBar
