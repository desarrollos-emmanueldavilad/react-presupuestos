import React, { Fragment, useState } from "react";
import Error from './error';

const Pregunta = props => {
  const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;

  //definir el state

  const [cantidad, guardarCantidad] = useState(0);
  const [error, guarderError] = useState(false);

  //validar presupuestp
  const agregarPresupuesto = e => {
    e.preventDefault();
    // validar
    if (cantidad <= 1 || isNaN(cantidad)) {
      guarderError(true);
      return;
    }

    //si se pasa la validación
    guarderError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    guardarPreguntaPresupuesto(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      {error ? (
        <Error
        mensaje='El presupuesto es incorrecto'
        />
      ) : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Agrega tu presupuesto"
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Defirnir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
