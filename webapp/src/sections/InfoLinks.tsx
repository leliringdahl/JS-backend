import React from 'react'
import InfoLink from '../components/InfoLink'

const InfoLinks: React.FC = () => {
  return (
    <section className="info-links container d-flex justify-content-between align-items-center">
      <InfoLink link="/customer-support" icon="fa-regular fa-headset" title="Customer Support" body="Village did removed enjoyed explain talking."/>
      <InfoLink link="/payment-info" icon="fa-regular fa-credit-card" title="Secured Payment" body="Village did removed enjoyed explain talking."/>
      <InfoLink link="/delivery-info" icon="fa-regular fa-truck" title="Free Home Delivery" body="Village did removed enjoyed explain talking."/>
      <InfoLink link="/return-info" icon="fa-regular fa-truck" title="30 Day Returns" body="Village did removed enjoyed explain talking."/>
    </section>
  )
}

export default InfoLinks

