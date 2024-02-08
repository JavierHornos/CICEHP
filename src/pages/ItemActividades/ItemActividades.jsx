import React from 'react'
import "./ItemActividades.css"
import { Link } from "react-router-dom"

const ItemActividades = ({titulo, actividad, img}) => {

  return (
    <div className='cardActividades'>
      <strong>{titulo}</strong>
      <span>{actividad}</span>
      <br></br>

      <div className="logoBoton">
       <Link to={"/"}style={{ textDecoration: 'none' }}><img className="imgLogo" src={img} alt="fotos" /></Link>
        
        </div>

      <hr></hr>

    </div>
  )
}

export default ItemActividades