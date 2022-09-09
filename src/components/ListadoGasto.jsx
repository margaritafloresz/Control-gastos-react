import React from 'react'
import Gasto from './Gasto'


const ListadoGasto = ({
      gastos, 
      setGastoEditar,
      eliminarGastos,
      gastosFiltrados,
      filtros
      
  }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length ? 'Gastos': 'No hay gastos aún'}</h2>
       
        {
            filtros ? (
              gastosFiltrados.map( gasto => (
                <Gasto
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar = {setGastoEditar}
                      eliminarGastos = {eliminarGastos}
                />    
          ))
      ) : (

      gastos.map(gasto=>(
        <Gasto
         key={gasto.id}
         gasto={gasto}
         setGastoEditar = {setGastoEditar}
         eliminarGastos = {eliminarGastos}
        />
       
        ))
      ) 
      }

    </div>
  )
}

export default ListadoGasto
