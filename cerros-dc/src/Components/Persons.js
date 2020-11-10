import React from 'react';
import './Persons.css';

//Persona renderizado
export default function Persons({data}) {
    return (
        <div>
            {data.map(e=>{
                return(
                <div className='card-persona'>
                <h2>{e.nombre} {e.apellido}</h2>
                <p>Edad: {e.edad}</p>
                <p>Telefono: {e.telefono}</p>
                </div>
                )
            })}
        </div>
    )
}