import './App.css';
import React from 'react';
import Persons from './Components/Persons.js';

// dependencia que debes de agregar a la aplicacion react que generes https://storybook.js.org/
const data = [{
  "id":"001",
  "nombre": "Juan Carlos",
  "apellido": "Perez Gonzalez",
  "edad": 60,
  "telefono": "11-5555-1234"
},
{
  "id":"002",
  "nombre": "Alice",
  "apellido": "Topa",
  "edad": 32,
  "telefono": "11-5555-1234"
}];
function App() {
  return (
    <div className="App">
      <Persons data={data} />
    </div>
  );
}

export default App;
