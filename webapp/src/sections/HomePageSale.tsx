import React from 'react'
import SectionSale from '../components/SectionSale'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductModels'

interface HomePageSaleType {
  items: ProductItem[]
}

/*störde mig enormt mycket på att den här delen var ojämn i mallen så tog lite creative liberty och tog 3 cards per rad. */
const HomePageSale: React.FC<HomePageSaleType> = ({items =[]}) => {

  return (
    <section className="products container-fluid">
      <div className="products-top-section d-flex justify-content-between align-items-center">
        <div className="top-section">
        <SectionSale title="2 FOR USD $29" link="/sale" text="FLASH SALE" image="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
        <div className="top-section-cards">
          <div className="row row-cols-1 row-cols-md-3">
          {
          items.map(product => <ProductCard key={product.articleNumber} item={product}/>)
          }
          </div>
        </div>        
      </div>
      <div className="products-bottom-section d-flex justify-content-between align-items-center">
        <div className="bottom-section-cards">
          <div className="row row-cols-1 row-cols-md-3">
          {
            items.map(product => <ProductCard key={product.articleNumber} item={product}/>)
          }
          </div>
        </div>
        <div className="bottom-section">
          <SectionSale title="2 FOR USD $49" link="/sale" text="FLASH SALE" image="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div> 
      </div>
    </section>
  )
}

export default HomePageSale