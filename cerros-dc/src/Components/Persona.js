import React from 'react';

//Persona renderizado
export default function Persona({ nombre, apellido, edad, actividad }) {
    return (
        <div>
            <h3>Nombre {nombre} {apellido}</h3>
            <p>Edad: {edad}</p>
            <p>Actividad: {actividad}</p>
        </div>
    )
}