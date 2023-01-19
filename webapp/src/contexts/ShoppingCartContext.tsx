import { createContext, ReactNode, useContext, useState } from "react"
import { ProductItem } from "../models/ProductModels"



interface ShoppingCartProviderProps {
    children: ReactNode
}

export interface CartItem {
    articleNumber: string
    product: ProductItem
    quantity: number
}
export interface ShoppingCartType {
    increaseQuantity: (cartItem:CartItem) => void
    decreaseQuantity: (cartItem:CartItem) => void
    removeFromCart: (articleNumber:string) => void
    cartQuantity: number
    cartItems: CartItem[]
}

export const ShoppingCartContext = createContext({} as 
    ShoppingCartType)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export const ShoppingCartProvider:React.FC<ShoppingCartProviderProps> = ({children}) => {
        const [cartItems, setCartItems] =useState<CartItem[]>([])

        const cartQuantity = cartItems.reduce(
            (quantity, item, product) => item.quantity + product + quantity, 0
            )


        const increaseQuantity = (cartItem: CartItem) => {
            const {articleNumber, product} = cartItem

            setCartItems(cartItems => {
                if (cartItems.find(item => item.articleNumber === articleNumber) == null) {
                    return [...cartItems, { articleNumber, product, quantity: 1}]
                } else {
                    return cartItems.map(item => {
                        if (item.articleNumber === articleNumber) {
                            return {...item, quantity: item.quantity +1}
                        } else {
                            return item
                        }
                    })
                }
            })
        }

        const decreaseQuantity = (cartItem: CartItem) => {
            const {articleNumber, product} = cartItem

            setCartItems(cartItems => {
                if (cartItems.find(item => item.articleNumber === articleNumber)?.quantity == 1) {
                    return cartItems.filter(item => item.articleNumber !== articleNumber )
                } else {
                    return cartItems.map(item => {
                        if (item.articleNumber === articleNumber) {
                            return {...item, quantity: item.quantity -1}
                        } else {
                            return item
                        }
                    })
                }
            })
        }

        function removeFromCart(articleNumber:string) {
            setCartItems(cartItems => {
                return cartItems.filter(item => item.articleNumber !== articleNumber)
            })
        }

 

    return <ShoppingCartContext.Provider value={{increaseQuantity, decreaseQuantity, removeFromCart, cartItems, cartQuantity}}>
    {children}

    </ShoppingCartContext.Provider>
}

export default ShoppingCartContext