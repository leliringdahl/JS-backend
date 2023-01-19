import React from 'react'
import img1 from '../assets/images/img-1.png'
import img2 from '../assets/images/img-2.png'
import MainButton from '../components/MainButton'

const Showcase: React.FC = () => {
  return (
    <section className='showcase container-fluid'>
        <img id="showcase-img-1" src={img1} alt="img-1"/>
                    <div className="showcase-body">
                        <h1>Sale Up<p>To 50% Off</p></h1>
                        <p>Online shopping free home delivery over $100</p>
                        <MainButton link="/sale" text="SHOP NOW"/>
                    </div>
                    <img id="showcase-img-2" src={img2} alt="img-2"/>
 
    </section>
  )
}

export default Showcase