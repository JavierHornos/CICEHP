import React, { useEffect,  } from 'react'
import "./Main.css"
import Fotos from '../Fotos/Fotos'
import Publicaciones from '../Publicaciones/Publicaciones'

const Main = (props) => {

  useEffect(() => {
    console.log("se activo el useEfectst")
    document.title = 'CICEHP';

  },[])


  //const [publicaciones, setPublicaciones] = useState([]);
  // <Publicacion/>
  return (
    <>

    <Fotos/>
    <div className='main'>
        <h2>{props.greeting}</h2>
        <Publicaciones/>
        
    </div>

    </>
  )
}

export default Main