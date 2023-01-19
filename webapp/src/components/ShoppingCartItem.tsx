import React from 'react'
import {ShoppingCartType, useShoppingCart, CartItem } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'

interface ShoppingCartItemType {
    item: CartItem
}

const ShoppingCartItem: React.FC<ShoppingCartItemType> = ({item}) => {
    const { increaseQuantity, decreaseQuantity, removeFromCart } = useShoppingCart() as ShoppingCartType

    return (
        <div className="shoppingcart-item">
            <div className="item-image">
                <img src={item.product.imageName} alt={item.product.name} />
            </div>
            <div className="prodInfo">
                <div className="prodInfo-name">{item.product.name}</div>
                <div className="prodInfo-quantity">
                    <div className="set-prodInfo-quantity">
                        <button className="box-button-left" onClick={() => decreaseQuantity(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button className="box-button-right" onClick={() => increaseQuantity(item)}>+</button>
                    </div> 
                </div>
            </div>
            <div className="prod-Price">
                <div>{currencyFormatter(item.product.price * item.quantity)}</div>
                <button onClick={() => removeFromCart(item.articleNumber)}><i className="fa-regular fa-trash"></i></button>
            </div>
        </div>
    )
}

export default ShoppingCartItem