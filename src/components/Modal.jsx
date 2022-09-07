import { useState} from 'react'
import mensaje from './Mensaje'
import CerrarImg from "../img/cerrar.svg"
import Mensaje from './Mensaje'


const Modal = ({setModal,animarModal, setanimarModal, guardarGasto}) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () =>{
   
       setanimarModal(false)

       setTimeout(()=>{
        setModal(false)
       },600)
    }
    const handleSubmit = (e =>{
        e.preventDefault()
       if ([nombre,categoria,cantidad].includes('')){
            setMensaje ("Todos los campos son obligatorios")

            setTimeout(()=>{
                setMensaje('')
            }, 3000)
        return;
       }
       guardarGasto({nombre,cantidad,categoria})
    })

  return (
    <div className="modal">
     <div className="cerrar-modal">
        <img src={CerrarImg}
         alt="Cruz para cerrar venta modal" 
         onClick={ocultarModal}
         />
     </div>

     <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
        <legend>Nuevo gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        
      
        <div className="campo">
            <label htmlFor="nombre"> Nombre gasto</label>
            <input 
            type="text" 
            id="nombre"
            placeholder="Añade el nombre del gasto. "
            value={nombre}
            onChange= { e=> setNombre(e.target.value)}
            />
        </div>
        <div className="campo">
            <label htmlFor="cantidad"> Cantidad</label>
            <input 
            id="cantidad"
            type="number" 
            placeholder="Añade la cantidad del gatos: ej. 300"
            value={cantidad}
            onChange={ e=> setCantidad(Number(e.target.value))}
            />
        </div>

        <div className="campo">
            <label htmlFor="categoria"> Categorías</label>
            <select name="categogia" id="categoria"
                value={categoria}
                onChange = {e => setCategoria(e.target.value)}
            >

                <option value=""> -- Seleccione -- </option>
                <option value="ahorro"> Ahorro </option>
                <option value="comida"> Comida </option>                
                <option value="cuidadoPersonal">  Cuidado Personal  </option>
                <option value="gastos"> Gastos varios  </option>
                <option value="hogar">  Hogar  </option>
                <option value="salud">  Salud </option>
                <option value="ocio"> Ocio  </option>
                

            </select>
        </div>

        <input
             type="submit"
            value="añadir gasto"
        />


     </form>
    </div>
  )
}

export default Modal
