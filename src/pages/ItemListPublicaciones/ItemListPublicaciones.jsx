import React from 'react'
import "./ItemListPublicaciones"
import ItemPublicaciones from '../ItemPublicaciones/ItemPublicaciones'

const ItemListPublicaciones = ({publicaciones}) => {
  return (
    <div className='contenedorPublicaciones'>

        {publicaciones.map(publi => <ItemPublicaciones key={publi.id} {...publi} /> )}
        
    </div>
  )
}

export default ItemListPublicaciones