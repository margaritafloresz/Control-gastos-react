import {useEffect, useState} from 'react'

const Filtros = ({filtros, setFiltros}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form action="">
        <div className='campo'>
            <label htmlFor="">Filtrar gastos</label>
            <select 
                value={filtros}
                onChange = { e => setFiltros(e.target.value)}
            >

                <option value="">  Seleccione </option>
                <option value="ahorro"> Ahorro </option>
                <option value="comida"> Comida </option>                
                <option value="cuidadoPersonal">  Cuidado Personal  </option>
                <option value="gastos"> Gastos varios  </option>
                <option value="hogar">  Hogar  </option>
                <option value="salud">  Salud </option>
                <option value="ocio"> Ocio  </option>

            </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
