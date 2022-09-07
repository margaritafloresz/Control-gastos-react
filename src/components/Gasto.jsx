import React from 'react'
import {
    
}from 'react-swipeable-list'

import { formatearFecha } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'


const diccionarioIconos = {
                ahorro : IconoAhorro,
                comida  : IconoComida,         
                cuidadoPersonal : IconoSalud,
                gastos : IconoGastos,
                hogar : IconoCasa,
                salud : IconoSalud,
                ocio : IconoOcio

}

const Gasto = ({gasto}) => {

    const {categoria, nombre, cantidad, id, fecha} = gasto
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
                <img src={diccionarioIconos[categoria]}
                alt="Icono Gasto" 
                />
                <p className='categoria'>{categoria}</p>
                <p className='nombre-gasto'>{nombre}</p>
                <p className='fecha-gasto'>
                    Agregado el : {''} <span> {formatearFecha(fecha)}</span>
                </p>
            </div>
        </div>
        <p className='cantidad-gasto'>${cantidad}</p>
    </div>
  )
}

export default Gasto