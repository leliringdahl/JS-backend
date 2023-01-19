import React, {useContext} from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/context'
import { ProductItem } from '../models/ProductModels'

interface ProductGridType {
  title: string
  items: ProductItem[]
}

const ProductGrid: React.FC<ProductGridType> = ({title, items=[]}) => {

  return (
    <section className="grid-products">
      <h2>{title}</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-3"> 
        {
          items.map(product => <ProductCard key={product.articleNumber} item={product}/>)
        }
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
