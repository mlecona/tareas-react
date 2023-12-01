import React, { useState } from 'react';
import '../estilos/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
  
    props.onSubmit(tareaNueva);

  };

  return (
    <div className='tarea-formulario'>
      <form className='tarea-formulario'
        onSubmit={ manejarEnvio }>
        <input
          className='tarea-input'
          type='text'
          name='texto'
          placeholder='Escribe una Tarea...'
          onChange={ manejarCambio }
        />
        <button className='tarea-boton'>
          Agregar Tarea
        </button>
      </form>
    </div>
    );
}

export default TareaFormulario;