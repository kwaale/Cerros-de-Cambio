import './App.css';
import React from 'react';
import Personas from './Components/Personas.js';

// dependencia que debes de agregar a la aplicacion react que generes https://storybook.js.org/

function App() {
  return (
    <div className="App">
      <h1>Prueba App Knut</h1>
        <Personas/>
    </div>
  );
}

export default App;
