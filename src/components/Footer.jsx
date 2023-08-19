import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  let year=new Date().getFullYear();
  return (
    <div className='bg-info w-100 h-100 text-italic' >
  <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        
      </Link>
      <span className="text-muted fs-3">© {year} yUvI  Company, Inc</span>
    </div>

  </footer>
    </div>
    </div>
  )
}

export default Footer