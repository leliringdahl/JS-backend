import React from 'react'
import Navbar from '../sections/Navbar'
import ContactsPage from '../sections/ContactsPage'
import Form from '../sections/Form'
import Footer from '../sections/Footer'

const ContactsView: React.FC = () => {
  window.document.title = 'Contacts | Fixxo.'

  return (
    <>
      <Navbar />
      <ContactsPage currentPage="Contacts" />
      <Form />
      <Footer />
    </>
  )
}

export default ContactsView