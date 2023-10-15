import './App.css';
import logo from './img/JOE DEV.png';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="App-tarea">
     <div className='logo-contenedor'>
      <img
      src={logo}
      className='logo' />
     </div>
     <div className='tarea-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
     </div>
    </div>
  );
}

export default App;
