import React, {useContext, useEffect} from 'react'
import Navbar from '../sections/Navbar'
import Showcase from '../sections/Showcase'
import ProductGrid from '../sections/ProductGrid'
import Banners from '../sections/Banners'
import HomePageSale from '../sections/HomePageSale'
import InfoLinks from '../sections/InfoLinks'
import Footer from '../sections/Footer'
import {ProductContextType, useProductContext} from '../contexts/context'



const HomeView: React.FC = () => {
  const {products, getProducts, featuredProducts, getFeaturedProducts} = useProductContext() as ProductContextType;

 /* jag har inte lyckats koppla ihop webAPIet med webAppen ordentligt. 
  react klagar på missing dependency här nedan. trodde först att det var problemet men har försökt med flera lösningar utan att det hjälpt, får en white screen.
 */
 /* useEffect(() => {
    getFeaturedProducts(2)
  }, []) */

  return (
    <>
      <Navbar />
      <Showcase />
      <ProductGrid title="Featured Products" items={featuredProducts}/>  
      <Banners />
      <HomePageSale items={products} />
      <InfoLinks />
      <Footer />
    </>
  )
}

export default HomeView