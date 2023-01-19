import React from 'react'
import Logo from '../assets/images/logo.svg'
import RoundButton from '../components/RoundButton'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const Navbar: React.FC = () => {
//roundbutton quantity måste vara valbar
const {cartQuantity} = useShoppingCart()

  return (
    <nav className="navbar">
        <div className="container-fluid">
            <NavLink className="logo __1-fr" to="/"><img src={Logo} alt="Fixxo."/></NavLink>
            <nav className="browse-menu __2-fr d-flex justify-content-center align-items-center">
                <NavLink className="browse-link" to="/" end>Home</NavLink>
                <NavLink className="browse-link" to="/categories" end>Categories</NavLink>
                <NavLink className="browse-link" to="/products" end>Products</NavLink>
                <NavLink className="browse-link" to="/contacts" end>Contacts</NavLink>  
            </nav>
            <nav className="button-menu __1-fr">
                <RoundButton link="/search" icon="fa-regular fa-magnifying-glass" />  
                <RoundButton link="/compare" icon="fa-regular fa-code-compare" />  
                <RoundButton link="/wishlist" quantity={5} icon="fa-regular fa-heart" />  
                <RoundButton data-bs-toggle="offcanvas" data-bs-target="#offCanvasScrolling" aria-controls="offcanvasScrolling" quantity={cartQuantity} icon="fa-regular fa-bag-shopping" link="" />        
            </nav> 
        </div>
    </nav>
  )
}

export default Navbar