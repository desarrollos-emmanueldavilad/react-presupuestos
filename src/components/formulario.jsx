import React, {useState} from 'react';
import Error from './error';
import shortid from 'shortid';
const Formulario = (props) => {

    const {guardarGasto, guardarCrearGasto} = props

    //state

    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const  [error, guardarError] = useState(false);


    //cuando se agrega el gasto
    const agregarGasto = (e) =>{
        e.preventDefault();
        //validar 
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true);
            return;
        }

        //pasar el gasto al componente principal

        //construir objecto de hgasto

        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }
        guardarGasto(gasto);
        guardarCrearGasto(true);
        guardarError(false);

        //resetear el form

        guardarCantidadGasto('');
        guardarNombreGasto('');
    }
    return (
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? (
        <Error
        mensaje='Ambos campos son obligatorios'
        />
      ) : null}
            <div className="campo">
                <label>Gasto</label>
                <input type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input type="number"
                    className="u-full-width"
                    placeholder="Ej. 320"
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
                    value={cantidadGasto}
                />
            </div>
            <input type="submit"
            className="btn-primary u-full-width"
            value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;

