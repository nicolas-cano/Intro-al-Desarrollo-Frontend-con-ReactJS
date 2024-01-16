import React from 'react';
import './App.css';

//Componentes de las encuestas
import Encuestas from './components/Encuestas';

function App() {
  //Estado para rastrear las encuestas

  const encuestas = [
    {id: 1, pregunta: '¿Cuál es tu color favorito?', opciones: ['Rojo', 'Verde', 'Azul']},
    {id: 2, pregunta: '¿Cual es tu comida favorita?', opciones: ['Pizza', 'Hamburguesa', 'Sushi']},
  ];

  return (
    <div className="App"> 
      <h1>Aplicacion de Encuestas</h1>
      { /* Contenido de las paginas*/ }
      <Encuestas encuestas={encuestas} />
    </div>
  );
}

export default App;
