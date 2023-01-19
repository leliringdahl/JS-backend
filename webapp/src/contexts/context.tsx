import {createContext, useContext, useState} from 'react'
import { ProductItem } from '../models/ProductModels'


/* iom att jag har lyckats console.loggat ut objekten i wbAPI tror jag att problemet till varför det inte funkar finns någonstans här men jag vet inte vad.   */

interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    featuredProducts: ProductItem[]
    getProduct: (articleNumber: string) => void
    getProducts: () => void
    getFeaturedProducts: (take?:number) => void
    
}

export const ProductContext = createContext<ProductContextType | null>(null)


export const useProductContext = () => {
    return useContext(ProductContext)
}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const emptyProduct: ProductItem = {articleNumber:'', name:'', category:'', price:0, imageName:'', tag:'', description:''}
    
    const baseUrl = 'http://localhost:5000/api/products'

    const [product, setProduct] = useState<ProductItem>(emptyProduct)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([]) 



    const getProduct = async (articleNumber:string) => {
        const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
        setProduct(await res.json())
    }


    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }


    const getFeaturedProducts = async (take:number = 0) => {
        let url = baseUrl + `?tag=featured`
        if (take !== 0)
            url += `&take=${take}`
        const res = await fetch(url)
        setFeaturedProducts(await res.json())
        console.log()
    }
    console.log()


    return <ProductContext.Provider value={{product, products, featuredProducts, getProduct, getProducts, getFeaturedProducts}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider