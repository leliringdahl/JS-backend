import React from 'react'

interface FormAlertNotificationType {
    alertType: string
    text: string
}


export const FormAlertNotification: React.FC<FormAlertNotificationType> = ({alertType, text}) => {
  return (
    <div>
        <div className={`alert alert-${alertType}`} role="alert">
            <h2>{text}</h2>
        </div>
    </div>
  )
}

export default FormAlertNotification