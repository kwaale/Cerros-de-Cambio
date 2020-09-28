import React from 'react';
import Persona from './Persona'

//Modelo de Persona
export default function Personas(){
    return(
        <div>
           <Persona
        nombre={'Knut'}
        apellido={'Waale'}
        edad={36}
        actividad={'Web'}
      />
        </div>
    )
}