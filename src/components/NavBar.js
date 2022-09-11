import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className='NavBar' >

      <Link to={'/'}> KLOVER STORE </Link>
        
      <ul className='ul'>

        <li><a href=".">Inicio</a></li>
        <li><a href=".">Productos</a></li>
        <li><a href=".">Contacto</a></li>
        <li><a href=".">Nosotros</a></li>

      </ul>
        <CartWidget/>
    </nav>
  )
}
export default NavBar