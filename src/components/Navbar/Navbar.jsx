import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";


const Navbar = () => {

  return (

    <>
    <header>
        <div className="btn-menu"><label htmlFor="btn-menu" className='hamburguesa'><FaBars /></label></div>
        <Link to={"/"}style={{ textDecoration: 'none' }}><h1>Logo</h1></Link>

        <nav>
            <ul>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" : "NavLinkDesactivo"} to={`/about`}>Sobre Nosotros</NavLink>
                </li>
                <li>
                <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" : "NavLinkDesactivo"} to={`/actividades`}>Actividades</NavLink>
                </li>
                <li>
                <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" : "NavLinkDesactivo"} to={`/publicaciones`}>Publicaciones</NavLink>
                </li>
                <li>
                <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" : "NavLinkDesactivo"} to={`/investigacion`}>Investigación</NavLink>
                </li>
                <li>
                <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" : "NavLinkDesactivo"} to={`/docencia`}>Docencia</NavLink>
                </li>
                
            </ul>
        </nav>
        
    </header>


        <div className="capa"></div>

        <input type="checkbox" id="btn-menu"></input>


    <div className='container-menu'>
        <div className='cont-menu'>
        <nav>
            <ul>
            <li>
            <NavLink end className={({isActive}) => isActive ? "NavLinkActivo2" : "NavLinkDesactivo2"} to={`/undav`}>UNDAV</NavLink>
            </li>
            <li>
            <NavLink end className={({isActive}) => isActive ? "NavLinkActivo2" : "NavLinkDesactivo2"} to={`/cehp`}>CEHP</NavLink>
            </li>
            <li>
            <NavLink end className={({isActive}) => isActive ? "NavLinkActivo2" : "NavLinkDesactivo2"} to={`/links`}>Links de Interes</NavLink>
            </li>
            <li>
            <NavLink end className={({isActive}) => isActive ? "NavLinkActivo2" : "NavLinkDesactivo2"} to={`/agenda`}>Agenda</NavLink>
            </li>
            <li>
            <NavLink end className={({isActive}) => isActive ? "NavLinkActivo2" : "NavLinkDesactivo2"} to={`/contacto`}>Contacto</NavLink>
            </li>
            </ul>
        </nav>


        <label htmlFor="btn-menu">✖️</label>

        </div>

    </div>

</>         



  )
}

export default Navbar