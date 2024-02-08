const Publicaciones = [
    {id: 1, nombre:"Carranza, Martin; Gregoric, Alejandro; Labra, Claudio; Longoni, Lucas (2023),", publi:"“Dirigismo y autoconstrucción. El programa ATEPAM y los debates durante la presidencia de Hilario Zalba en el Instituto de la Vivienda de la provincia de Buenos Aires, Argentina (1958-1962)”, en revista Anales de Investigación en Arquitectura, Vol. 13 Núm 2. Montevideo, Universidad ORT Uruguay, 2023. Recuperado en sitio: https://revistas.ort.edu.uy/anales-de-investigacion-en-arquitectura/article/view/3539", },
    {id: 2, nombre: "Gregoric, Alejandro; Labra, Claudio; Longoni, Lucas (2022),", publi: "“Debates e itinerarios acerca de la autoconstrucción de vivienda en la Argentina. 1956-1975”, ponencia publicada en actas de las XXXVI Jornadas de Investigación XVIII Encuentro Regional SI FADU. Buenos Aires, FADU UBA, octubre de 2022. Recuperado en sitio: xxxx", },
    {id: 3, nombre:"Carranza, Martin (2022),", publi: "“UNDAV o la transformación del imaginario urbano industrial de Avellaneda”, en: Actas IX Encuentro de Docentes e Investigadores de Historia de la Arquitectura, el Diseño y la Ciudad, IAA-FADU-UBA. Recuperado en sitio: https://undavdigital.undav.edu.ar/handle/20.500.13069/1339"},
    {id: 4, nombre:"Carranza, Martin (2022),", publi: "“Ana María Azzarri: Mujer, arquitecta y militante”, en: Actas IX Encuentro de Docentes e Investigadores de Historia de la Arquitectura, el Diseño y la Ciudad, IAA-FADU-UBA. Recuperado en sitio: https://undavdigital.undav.edu.ar/handle/20.500.13069/1340"},
    {id: 5, nombre:"Gregoric, Alejandro; Labra, Claudio; Longoni, Lucas (2019),", publi: "“La vivienda como signo. Imágenes sobre el Block Prototipo de Hilario Zalba”, ponencia publicada en actas de las XXXIII Jornadas de Investigación XV Encuentro Regional SI FADU. Buenos Aires, FADU UBA, noviembre de 2019.Recuperado en sitio: xxxx"},
    {id: 6, nombre:"Carranza, Martin (2017), ", publi: "“El patrimonio industrial de Avellaneda es una `historia viva´”, en: Con información, Avellaneda: UNDAV, p. 8. Recuperado en sitio: https://coninformacion.undav.edu.ar/287.html"},

]

export const getPublicaciones = () => {
    return new Promise ((resolve) => {
        setTimeout( ()=> {
            resolve(Publicaciones)
        }, 1)
    })
}


const Actividades = [
    {id: 1, titulo:"Seminario y muestra “Debates e itinerarios acerca de la autoconstrucción en la Argentina”, dentro del Proyecto UNDAVCYT 2019 “La obra de Hilario Zalba en el Instituto de Vivienda de la Provincia de Buenos Aires (1958-1962). Progamas, teoría y puesta en valor”.", actividad:"Presentación a cargo de Martín Carranza y Lucas Longoni. Ponencias a cargo de Juan Santiago Palero, “Participación en arquitectura de vivienda social. La propuesta teórica de Turner y su continuidad en el PREVI”; Claudio Labra, “El sistema ATEPAM. Primeros ensayos en la asimilación estatal de los procesos de autoconstrucción”; Alejandro Gregoric, “Sistemas de vivienda UNNE-UNO, prototipo universitario aplicado a la vivienda modular”; Martín Carranza, “El caso del Plan Piloto de Realojamiento para Villa 7 en el barrio de Mataderos”; Lucas Longoni, “La experiencia del cooperativismo en el conjunto Monteagudo”. UNDAV, Sede Piñeyro, noviembre 2022.", img: "./Images/1.jpg"},
    {id: 2, titulo:"Semana Nacional de la Ciencia y la Tecnología UNDAV 2022", actividad:"Presentaciones a cargo de Martín Carranza y Lucas Longoni. Mesa Redonda: “¿Cómo es investigar en Arquitectura?”. Apertura y cierre a cargo del Decano Prof. Jaime Sorín. UNDAV, Sede Piñeyro, septiembre 2022.", img: "./Images/2.jpeg"},
]

export const getActividades = () => {
    return new Promise ((resolve) => {
        setTimeout( ()=> {
            resolve(Actividades)
        }, 1)
    })
}



