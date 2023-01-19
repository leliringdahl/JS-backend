import React from 'react'
import offcanvas from "react-bootstrap"
import { useShoppingCart, ShoppingCartType } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart: React.FC = () => {
    const { cartItems } = useShoppingCart() as ShoppingCartType

    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offCanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel"><i className="fa-regular fa-bag-shopping me-2"></i>Shopping Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {
                cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
                }
            </div>
        </div>
    )
}

export default ShoppingCart


/*      <div className= "shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
            <div className="offcanvas-header">
                <h3 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping me-2"></i>Shopping Cart</h3>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            {
                cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
            }
            </div>
        </div>
*/