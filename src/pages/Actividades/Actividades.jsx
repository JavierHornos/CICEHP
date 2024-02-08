import React, { useEffect, useState,  } from 'react'
import "./Actividades.css"
import { getActividades } from '../../asyncmock'
import ItemListActividades from '../ItemListActividades/ItemListActividades'



const Actividades = () => {

  const [actividades, setActivdades] = useState([]);

  
  useEffect(() => {
    console.log("se activo el useEfectst")
    document.title = 'Actividades';
    console.log("pidiendo activdades")
    getActividades()
      .then(respuesta => setActivdades(respuesta)) 
      .catch(error => console.log(error))
      console.log(actividades)

  },[actividades])

  return (
    <div className='actividades'>
            <ItemListActividades actividades={actividades} />
    </div>
  )
}

export default Actividades