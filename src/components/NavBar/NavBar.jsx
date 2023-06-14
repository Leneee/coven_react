import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src="../img/logo.jpg" alt="" className='logo' />
      </Link>
      
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
