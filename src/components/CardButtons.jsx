import React, { useEffect, useState } from 'react'
import { mostrarEnConsolaHolaMundo } from '../hooks/mostrarEnConsolaHolaMundo';
import { Pach } from './Pach';

export const CardButtons = () => {

    const [count, setCount] = useState(0);
    //   const [contador2, setContador20] = useState(0);

    useEffect(() => {
        console.log('Hola mundo useEffect');
        return {
            
        }
    }, [count])

    // ?   const [valor, modificarValor] = useState(valorInicial)

    const [mostrarEnConsola, mostrarEnConsolaAdios] = mostrarEnConsolaHolaMundo(); // Custom React Hook 

    return (
        <div className="card">
            {/* <button onClick={mostrarEnConsola}>
                Hola Mundo en Consola
            </button> */}
            {
                count < 5 ? <Pach/> : <h1>Hola</h1>
            }
            <button onClick={() => setCount(a => a + 1)}>
                count is {count}
            </button>
            {/* <button onClick={() => setContador20(a => a + 20)}>
                contador is {contador2}
            </button> */}
        </div>
    )
}
