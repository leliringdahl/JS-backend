import { NavLink } from 'react-router-dom'

interface BreadcrumbType {
    currentPage: string
}

const ContactsPage: React.FC<BreadcrumbType> = ({currentPage}) => {


  return (
    <>
        <section className="breadcrumb">
            <div className="container">
                <ul className="breadcrumb-list">
                    <li><NavLink className="parent-page" to="/">Home</NavLink></li>
                    <li>{currentPage}</li>
                </ul>
            </div>
        </section>
        <section className="map">
            <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8137.04365446104!2d18.0222217!3d59.3452924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac5dd727a529fe56!2sEC%20Utbildning!5e0!3m2!1ssv!2sse!4v1669466753840!5m2!1ssv!2sse" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </>
    
  )
}

export default ContactsPage