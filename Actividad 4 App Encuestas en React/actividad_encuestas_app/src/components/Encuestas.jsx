import React, { useState } from 'react';

function Encuestas({ encuestas }) {
    const [selectedOptions, setSelectedOptions] = useState({});
  
    const handleOptionChange = (encuestaId, opcion) => {
      setSelectedOptions({ ...selectedOptions, [encuestaId]: opcion });
    };
  
    return (
      <div>
        <h2>Encuestas Disponibles</h2>
        <ul>
          {encuestas.map(encuesta => (
            <li key={encuesta.id}>
              <div>
                <h3>{encuesta.pregunta}</h3>
                <ul style={{ listStyle: 'none' }}>
                  {encuesta.opciones.map(opcion => (
                    <li key={opcion}>
                      <label>
                        <input
                          type="radio"
                          name={encuesta.id}
                          value={opcion}
                          checked={selectedOptions[encuesta.id] === opcion}
                          onChange={() => handleOptionChange(encuesta.id, opcion)}
                        />
                        {opcion}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Encuestas;