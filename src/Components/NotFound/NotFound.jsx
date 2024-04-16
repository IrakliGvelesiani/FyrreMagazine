import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.css"
import Helmet from '../Helmet/Helmet'




const NotFound = () => {
  return (
    <Helmet title='Not Found'>
       <div className="notfound__wrapper">
       <div className='notfound__container'>
        <div className="notfound__title">
            <h1>404</h1>
        </div>
        <div className="notfound__content">
        <h2>Page Not Found</h2>
        </div>
        <div className="notfound__button">
            <Link to='/'>Back To homepage</Link>
        </div>
    </div>
       </div>
    </Helmet>
    
  )
}

export default NotFound