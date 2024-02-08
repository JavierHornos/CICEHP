import React, { useEffect,  } from 'react'
import "./About.css"

const About = () => {

  useEffect(() => {
    console.log("se activo el useEfectst")
    document.title = 'Sobre nosotros';

  },[])


  return (
    <>
    <div className='about'>
      <br></br>

      <h4>Coordinación: Mgr. Arq. Lucas Longoni y Mgr. Arq. Martin Carranza</h4>

      <p>CICEHP se conformó en 2023 como un colectivo de docentes-investigadores y estudiantes en formación perteneciente a una de las grandes áreas del Centro de Estudios del Habitar Popular (CEHP): Historia y Teoría de la Arquitectura, el Diseño y la Ciudad. Es producto de la confluencia, intercambios y actividades en conjunto que fueron articulándose precedentemente entre dos sub-áreas del CEHP: “Historia de la Vivienda Social” -coordinada por el Mgr. Arq. Lucas Longoni- y “Teorías e Historia de la Arquitectura Moderna y Contemporánea” -coordinada por el Mgr. Arq. Martin Carranza-.</p> 

      <p>El espacio incluye la concurrencia entre las materias de grado “Historia de la Arquitectura I-II-III-IV” (cátedra Prof. Arq. Alberto Petrina), “Fundamentos de la Arquitectura Contemporánea”, “Historia de la Arquitectura IV” y “Teoría de la Arquitectura” –talleres que coordina el Prof. Carranza- e “Historia de la vivienda social en Argentina” –taller que coordina el Prof. Longoni-, en la voluntad por sintetizar y compartir contenidos programáticos inherentes a la estructura curricular del área de Historia.</p>

      <p>El colectivo se nutre con la participación de un cuerpo docentes-investigadores formados, acompañados por un grupo de estudiantes y jóvenes profesionales en formación, y cuenta como antecedentes con tres proyectos de investigación acreditados: un proyecto PRIICA (2016/2017) y dos proyectos UNDAVCYT (2017/2018; 2019/2022), siendo el último de esta diada el que formalizó el encuentro interáreas del colectivo de investigadores.</p> 

      <h4>Objetivos:</h4>

      <p>Ampliar el campo de conocimiento en relación a la Historia y Teoría de la Arquitectura en la Argentina y el continente americano, en línea con los objetivos perseguidos en el área de Historia del CEHP.</p>
      <p>Aportar recursos y herramientas tanto para la formación de investigadores como de alumnos avanzados.</p>
      <p>Difundir y transferir los resultados de los estudios e integrar redes de investigación con centros y grupos que compartan problemas afines en el país y en el exterior.</p>
      <p>Difundir los trabajos e investigaciones en curso mediante la presentación en seminarios y encuentros académicos, así como alentar la elaboración de artículos que puedan contribuir al CEHP.</p>
    </div>

    </>
  )
}

export default About