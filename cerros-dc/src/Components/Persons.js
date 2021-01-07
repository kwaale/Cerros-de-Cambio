import React from 'react';
import './Persons.scss';
import foto from '../img/Foto.jpg';
import montania from '../img/Montania.png';

export default function Persons({ data }) {
    return (
        <div>
            {data.map(e => {
                return (
                    <div className='card-persona' key={e.id}>
                        <div className='cuerpos'>
                            <img className='montania' src={montania} alt='Montaña' />
                            <h2 className='nombre-perfil' >{e.name}</h2>
                        </div>
                        <div className='cuerpos'>
                            <img className='foto-perfil' src={foto} alt='Foto Perfil' />
                            <div className='data-persona'>
                                <ul><label>FECHA DE INICIO:</label> {e.fechaInicio}</ul>
                                <ul><label>FECHA DE NACIMIENTO:</label><br/> {e.birthday}</ul>
                                <ul><label>HABILIDADES:</label><br/> {e.skills.map(skill => {
                                    return (<li key={skill.id}>{skill.name}</li>)
                                })} </ul>
                                <ul><label>FRASE:</label><br/>{e.frase}</ul>
                            </div>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}