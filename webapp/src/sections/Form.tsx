import { ErrorResponse } from '@remix-run/router'
import React, { useState } from 'react'
import FormAlertNotification from '../components/FormAlertNotification'
import UserProvider from '../contexts/UserContext'


export interface ContactFormDataType {
  name: string
  email: string
  comment: string

}


const Form: React.FC = () => {
  const defaultValues: ContactFormDataType = {name:'', email:'', comment:''}  
  const [ContactFormData, setContactFormData] = useState<ContactFormDataType>(defaultValues)
  const [formErrors, setFormErrors] = useState<ContactFormDataType>(defaultValues)
  const [submit, setSubmit] = useState<boolean>(false)
  const [noSubmit, setNoSubmit] = useState<boolean>(false)

 //flytta valideringen?
 
  const validate_name = (elementName: string, value: string, minLength:number = 3 ) => {
    if (value.length == 0)
      return `Your ${elementName} is required`
    else if (value.length < minLength)
      return `Your ${elementName} must be longer than ${minLength} characters.`
    else
      return ''
  }

  const validate_email = (elementName:string, value:string, regEx: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) => {
    if (value.length == 0)
      return `An ${elementName} address is required`
    else if (!regEx.test(value))
      return `Your ${elementName} must be valid eg (example@domain.com).`
    else
      return ''
  }

  const validate_comment = (elementComment: string, value: string, minLength:number = 15) => {
    if (value.length == 0)
      return `A ${elementComment} is required`
    else if (value.length < 15)
      return `Your ${elementComment} must be longer than ${minLength} characters.`
    else
      return ''
  }



  //Form error del

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    setContactFormData({...ContactFormData, [id]: value})

    switch(id) {
      case 'name':
        setFormErrors({...formErrors, [id]: validate_name(id, value)})
        break
      case 'email':
        setFormErrors({...formErrors, [id]: validate_email(id,value)})
        break
    }
  }

  const handleTextAreaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const {id, value} = e.target

    if (id === 'comment')
      setFormErrors({...formErrors, [id]: validate_comment(id, value)})

  }



  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmit(false)
    setNoSubmit(false)
    
      if (ContactFormData.name !== null && ContactFormData.email !== null && ContactFormData.comment !== null) 
        if (formErrors.name === null && formErrors.email === null && formErrors.comment === null) {

          const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(ContactFormData)
          })

          if (res.status === 200) {
            setSubmit(true)
            setContactFormData(defaultValues)
          } else {
            setSubmit(false)
            setNoSubmit(true)
            }
        }     
  }

  const handleKeyUp = (e:React.KeyboardEvent) => {  /*vat ej om det kommer fungera*/
  e.preventDefault()   
}

  /*const handleKeyUp = (event) => {      <-- Funkade innan jag skulle börja med API men var tvungen att ändra om helt för förstod inte hur jag skulle få allt att samspela.
    event.preventDefault()
    setFormErrors(validate(contactForm))
  }*/

  /*const handleKeyUp = event => {     <-- Funkar med error-koderna men krockar med submit så postar så fort alla fält är rätt.
    event.preventDefault()
    setFormErrors(validate(event, {name, email, comment}))
  }*/
 
  
  return (
    <section className="contact-form">
      <div className="container">
        {
        submit ? (<FormAlertNotification alertType='success' text ='Thank you for your comment!' />):(<></>)
        }
        {
        noSubmit ? (<FormAlertNotification alertType='warning' text ='Something went wrong! Comment did not post' />):(<></>)
        }
        
        <h2>Come in Contact with Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input id="name" type="text" placeholder="Name" className="form-control" value={ContactFormData.name} onKeyUp={handleKeyUp} onChange={(e) => handleChange(e)}/>
            <div className="errorMessage">{formErrors.name}</div>
          </div>
          <div>
            <input id="email" type="email" placeholder="Your E-mail" className="form-control" value={ContactFormData.email} onKeyUp={handleKeyUp} onChange={(e) => handleChange(e)}/>
            <div className="errorMessage">{formErrors.email}</div>
          </div>
          <div className="textarea">
            <textarea id="comment" placeholder="Comments" className="form-control" value={ContactFormData.comment} onKeyUp={handleKeyUp} onChange={(e) => handleTextAreaChange(e)}></textarea> 
            <div className="errorMessage">{formErrors.comment}</div>
          </div>
          <div>
            <button type="submit" className="btn btn-main">Post Comments</button>
          </div>      
        </form>
      </div>
    </section>
  )
}

export default Form