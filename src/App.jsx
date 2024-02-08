import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Actividades from './pages/Actividades/Actividades';
import Publicaciones from './pages/Publicaciones/Publicaciones';
import Investigacion from './pages/Investigacion/Investigacion';
import Docencia from './pages/Docencia/Docencia';

function App() {
  return (
    
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Main greeting="Publicaciones"/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/actividades' element={<Actividades/>} />
        <Route path='/publicaciones' element={<Publicaciones/>} />
        <Route path='/investigacion' element={<Investigacion/>} />
        <Route path='/docencia' element={<Docencia/>} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
    </>

  );
}

export default App;
