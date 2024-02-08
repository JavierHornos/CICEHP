import React from 'react'
import "./ItemPublicaciones.css"

const ItemPublicaciones = ({publi, nombre}) => {
  return (
    <div className='cardPublicaciones'>
        <hr></hr>
        <strong>{nombre}</strong>
        <span>{publi}</span>
        <br></br>
        

    </div>
  )
}

export default ItemPublicaciones