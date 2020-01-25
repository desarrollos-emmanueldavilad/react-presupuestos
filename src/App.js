import React, {useState, useEffect} from 'react';
import Pregunta from './components/pregunta';
import Formulario from './components/formulario';
import Listado from './components/listado';
import ControlPresupuesto from './components/controlPresupuesto';

function App() {

  //state presupuesto

  const  [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [crearGasto, guardarCrearGasto] = useState(false);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);

  useEffect(() =>{
   if(crearGasto){
    const listadoGastos = [...gastos,gasto];
    guardarGastos(listadoGastos);

    //restar el presupuesto
    const presupuestoRestante = restante - gasto.cantidadGasto;
    guardarRestante(presupuestoRestante)

    guardarCrearGasto(false);
   }
  },[crearGasto, gastos,gasto,restante]);

  return (
    <div className="App container">
      <h1>Gasto Semanal</h1>
      <div className="contenido-principal contenido">
      {(preguntaPresupuesto)
      ?
      <Pregunta
      guardarPresupuesto={guardarPresupuesto}
      guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
      guardarRestante={guardarRestante}
      />
      :
      (
        <div className="row">
          <div className="one-half column">
          <Formulario
          guardarGasto={guardarGasto}
          guardarCrearGasto={guardarCrearGasto}
          />
          </div>
          <div className="one-half column">
            <Listado
            gastos={gastos}
            />
            <ControlPresupuesto
            presupuesto={presupuesto}
            restante={restante}
            />
          </div>
        </div>
      )
      }
      </div>
    </div>
  );
}

export default App;
