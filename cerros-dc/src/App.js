import './App.css';
import React from 'react';
import Persons from './Components/Persons.js';


// dependencia que debes de agregar a la aplicacion react que generes https://storybook.js.org/
fetch('URL')
  .then(response => response.json())
  .then(data => console.log(data));

const data = [{
  "_id": "001",
  "name": "alexis herlanda",
  "birthday": "02/10/1994",
  "fechaInicio": "02/03/2030",
  "originCountry": "Mexico",
  "originCity": "Ciudad de Mexico",
  "locationCity": "Ciudad de Mexico",
  "profession": "Ingeniero en Software",
  "lastGrade": "Superior",
  "frase": `“Solo para visualizar”`,
  "skills": [
    {
      id: "0",
      name: "Desarrollo web"
    },{
      id: "1",
      name: "Desarrollo web"
    },{
      id: "2",
      name: "Desarrollo web"
    }],
  "manager": 0,
  "axis": "0",
  "projectes": [
    { 0: "" }
  ],
  "enterDate": "10/10/2019",
  "interests": [{ 0: "" }],
  "status": 1,
  "email": "alexisherlanda@gmail.com",
  "profilePic": ".",
  "contactNumber": {
    code: "+52",
    number: "5534449949"
  }
},
{
  "_id": "002",
  "name": "Anlly Baez",
  "birthday": "02/08/1997",
  "fechaInicio": "02/10/2040",
  "originCountry": "Mexico",
  "originCity": "Ciudad de Mexico",
  "locationCity": "Ciudad de Mexico",
  "profession": "Ingeniero en Software",
  "lastGrade": "Superior",
  "frase": `“siempre se parte de la solución no del problema”`,
  "skills": [
    {
      id: "0",
      name: "Diseñadora industrial"
    },{
      id: "1",
      name: "Diseño de concepto y de producto hacia la sustentabilidad"
    },{
      id: "2",
      name: "Diseño de piezas gráficas en 2D y 3D"
    },{
      id: "3",
      name: "Eco friendly"
    }],
  "manager": 0,
  "axis": "0",
  "projectes": [
    { 0: "" }
  ],
  "enterDate": "10/10/2019",
  "interests": [{ 0: "" }],
  "status": 1,
  "email": "alexisherlanda@gmail.com",
  "profilePic": ".",
  "contactNumber": {
    code: "+52",
    number: "5534449949"
  }
}];
function App() {
  return (
    <div className="App">
      <Persons data={data} />
    </div>
  );
}

export default App;
