import React from 'react';
import './Persons.scss';
import foto from '../img/Foto.jpg';
import montania from '../img/Logo.png';

//Persona renderizado
//https://blog.hostdime.com.co/como-usar-de-forma-facil-google-fonts-con-sass/
//Fuente "Work Sans", sans-serif 
//Monserrat (para los títulos)
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
                                <ul>FECHA DE INICIO: {e.fechaInicio}</ul>
                                <ul>BIRTHDAY: {e.birthday}</ul>
                                <ul>HABILIDADES: {e.skills.map(skill => {
                                    return (<li key={skill.id}>{skill.name}</li>)
                                })} </ul>
                                <ul>FRASE: "Solo para visualizar" </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}