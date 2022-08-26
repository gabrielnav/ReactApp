import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className='NavBar' styles='il'>
       <a href="."> KLOVER STORE</a>
        <lo><a href=".">Inicio</a></lo>
        <lo><a href=".">Productos</a></lo>
        <lo><a href=".">Contacto</a></lo>
        <lo><a href=".">Nosotros</a></lo>
        <CartWidget/>
    </div>
  )
}
export default NavBar