import { useState } from "react";
import Header from "./components/Header";
import ListadoGasto from "./components/ListadoGasto";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";


function App() {
  const [gastos, setGastos] = useState([]);
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setanimarModal] = useState(false);

  

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setanimarModal(true);
    }, 500);
  };
  const guardarGasto = (gasto) => {
    gasto.fecha = Date.now();
    gasto.id = generarId();
    setGastos([...gastos, gasto])

    setanimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 600);
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
          <ListadoGasto
          gastos={gastos} 
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
        />
      )}
    </div>
  );
}

export default App;
