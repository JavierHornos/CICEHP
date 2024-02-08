import React, { useEffect, useState  } from 'react'
import "./Publicaciones.css"
import ItemListPublicaciones from '../ItemListPublicaciones/ItemListPublicaciones';
import { getPublicaciones } from '../../asyncmock';

const Publicaciones = () => {

  const [publicaciones, setPublicaciones ] = useState([]);


 

  useEffect(() => {
    console.log("Cambiando el Titulo")
    document.title = 'Publicaciones';
    console.log("pidiendo publicaciones")
    getPublicaciones()
      .then(respuesta => setPublicaciones(respuesta)) 
      .catch(error => console.log(error))
      console.log(publicaciones)

  },[publicaciones])

  return (
    <div className='publicaciones'>

          <ItemListPublicaciones publicaciones={publicaciones} />
      
    </div>
  )
}

export default Publicaciones