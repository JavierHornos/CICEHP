import React from 'react'
import "./ItemListActividades.css"
import ItemActividades from '../ItemActividades/ItemActividades'



const ItemListActividades = ({actividades}) => {
  return (
    <div className='contenedorActividades'>

      {actividades.map(acti => <ItemActividades key={acti.id} {...acti} />)}
      
    </div>
  )
}

export default ItemListActividades