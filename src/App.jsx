import { useState, useEffect } from "react";
import Filtros from "./components/Filtros";
import Header from "./components/Header";
import ListadoGasto from "./components/ListadoGasto";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";


function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []

  );

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setanimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtros,setFiltros] = useState('')
  const [gastosFiltrados,setGastosFiltrados] = useState([])

  useEffect(()=>{
      if(Object.keys(gastoEditar).length > 0){
        setModal(true);
    
        setTimeout(() => {
          setanimarModal(true);
        }, 500);
      }
  }, [gastoEditar])
  
  useEffect(()=>{
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  },[presupuesto])


  useEffect(() =>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  },[gastos])

  useEffect(() =>{
    if(filtros){
      //Filtrar gastos por categorias
      const gastosFiltrado = gastos.filter( gasto => gasto.categoria === filtros)
      setGastosFiltrados(gastosFiltrado)
    }
  

  },[filtros])

  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto',)) ?? 0
    console.log(presupuestoLS)
    if(presupuestoLS > 0){
      setIsValidPresupuesto(true)
    }
  }, [])

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar ({})

    setTimeout(() => {
      setanimarModal(true);
    }, 500);
  };

  //Guardar Gastos
  const guardarGasto = (gasto) => {
    if(gasto.id){
        //actualizar
        const gastosActualizados = gastos.map(gastoState => gastoState.id ===
           gasto.id ? gasto : gastoState)
           setGastos(gastosActualizados)
           setGastoEditar ({})
    }else{
        //Nuevo gasto
        gasto.id = generarId();
        gasto.fecha = Date.now();
        setGastos([...gastos, gasto])
    }
    setanimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 600);
  }
  //Eliminar gastos
    const eliminarGastos = id =>{
     const gastosActualizados = gastos.filter(gasto => gasto.id !== id);

     setGastos(gastosActualizados)
    }

  return (
    <div className={modal ? 'fijar' : '' }>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
            filtros = {filtros}
            setFiltros = {setFiltros}
            />
          <ListadoGasto
          gastos={gastos} 
          setGastoEditar = {setGastoEditar}
          eliminarGastos ={eliminarGastos}
          filtros = {filtros}
          gastosFiltrados = {gastosFiltrados}
          />
     
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setanimarModal={setanimarModal}
          guardarGasto={guardarGasto}
          gastoEditar = {gastoEditar}
          setGastoEditar ={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
