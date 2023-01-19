import React from 'react'
import img5 from '../assets/images/img-5.png'
import img6 from '../assets/images/img-6.png'
import MainButton from '../components/MainButton'

const Banners: React.FC = () => {
  return (
    <section className="banner">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="top-picks">
          <img src={img5} alt="img-5"/>
          <div className="top-picks-text">
            <h4>Pamela Reif's <p>Top Picks</p></h4>
            <MainButton link="/sale" text="SHOP NOW"/>
          </div>
        </div>
        <div className="flash-sale">
          <img src={img6} alt="img-6"/>
          <div className="flash-sale-text">
            <h4>Let's Be <p>Concious</p></h4>
            <MainButton link="/sale" text="FLASH SALE"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banners