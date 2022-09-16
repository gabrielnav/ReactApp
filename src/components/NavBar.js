import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className='NavBar' >

      <Link to={'/'}> KLOVER STORE </Link>
        
      <ul className='ul'>

      <li><Link to={'./'}>Inicio</Link></li>
      <li><Link to={'./Productos'}>Productos</Link></li>
      <li><Link to={'./Nosotros'}>Nosotros</Link></li>

      </ul>
        <CartWidget/>
    </nav>
  )
}
export default NavBar