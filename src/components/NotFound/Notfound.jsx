import React from 'react'
import "./notfound.scss"
import {Link} from "react-router-dom"

export const Notfound = () => {
  return (
    <div className = "notfound">
      <div className = "header" >...NotFound...</div>
      <Link to = "/" className='home' >HOME</Link>
    </div>
  )
}
