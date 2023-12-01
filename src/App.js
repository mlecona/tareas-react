import './App.css';
import logo from './imagenes/logo.png';
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className='Aplicacion-Tareas'>
      <div className='contenedor-logo'>
        <img className='logo-imagen' src={logo} alt='logo' />
      </div>
      <div className='tareas-lista-principal'> 
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
