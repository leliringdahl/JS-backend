import React from 'react'
import { NavLink } from 'react-router-dom'


interface MainButtonType {
  link: string
  text: string
}

const MainButton: React.FC<MainButtonType> = ({link, text}) => {
  return (
    <NavLink className="btn btn-main" to={link}>
        <div className="btn-bracket-left"></div>
        {text}
        <div className="btn-bracket-right"></div>
    </NavLink>
  )
}

export default MainButton