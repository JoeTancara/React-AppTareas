import React from "react";
import '../css/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";


function Tarea({ id, texto, completada, completarTarea, eliminarTarea }){
    return(
      <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor' }>
        <div 
        onClick={() => completarTarea(id)}
        className="tarea-texto">
          {texto}
        </div>
        <div className="tarea-icono"
         onClick={() => eliminarTarea(id)}>
          < AiOutlineCloseCircle  className="tarea-icono"/>
        </div>
      </div>
    );
}

export default Tarea;