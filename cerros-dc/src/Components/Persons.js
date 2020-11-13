import React from 'react';
import './Persons.css';
import foto from '../img/Foto.jpg';
import montania from '../img/Logo.png';


//Persona renderizado
export default function Persons({ data }) {
    return (
        <div>
            {data.map(e => {
                return (
                    <div className='card-persona' key={e.id}>
                        <div className='cuerpos'>
                            <img className='montania' src={montania} alt='Montaña' />
                            <h2 className='nombre-perfil' >{e.nombre} {e.apellido}</h2>
                        </div>
                        <div className='cuerpos'>
                            <img className='foto-perfil' src={foto} alt='Foto Perfil' />
                            <div className='data-persona'>
                                <li>Edad: {e.edad}</li>
                                <li>Telef: {e.telefono}</li>
                                <li>Relleno: Relleno largo que puede ocupar varias lineas "En gastronomía
                                    se llama relleno a la sustancia o mezcla comestible usada para llenar
                                    una cavidad en otro alimento. Se rellenan muchos alimentos, incluyendo
                                    carnes, verduras y frutas.".</li>
                                <li>Relleno: Relleno corto.</li>
                                <li>Relleno</li>
                                <li>Relleno</li>
                                <li>Relleno</li>
                                <li>Relleno</li>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}