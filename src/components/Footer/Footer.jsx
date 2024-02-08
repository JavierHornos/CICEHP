import React from 'react'
import "./Footer.css"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className='boxItems'>
        <div className='container-flex'>
        <p><Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}>&copy;</Link> 2024 <b>CICEHP</b> - Todos los Derechos Reservados.</p>
          <div className='social'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer