import React from 'react';
import './Persons.scss';
import foto from '../img/Foto.jpg';
import montania from '../img/Montania.png';

export default function Persons({data}) {
    //console.log("dataTem",data[0].name)
    return (
        <div>
            {data.map(e => {
                return (
                    <div className='card-persona' key={e.seq}>
                        <div className='cuerpos'>
                            <img className='montania' src={montania} alt='Montaña' />
                            <h2 className='nombre-perfil' >{e.name}</h2>
                        </div>
                        <div className='cuerpos'>
                            <img className='foto-perfil' src={e.imgeURL} alt='Foto Perfil' />
                            <div className='data-persona'>
                                <ul><label>FECHA DE INICIO:</label> {e.admissionDate}</ul>
                                <ul><label>FECHA DE NACIMIENTO:</label><br/> {e.birthDate}</ul>
                                <ul><label>HABILIDADES:</label><br/> {e.background} </ul>
                                <ul><label>FRASE:</label><br/>{e.occupation}</ul>
                            </div>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}