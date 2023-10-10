import { useState } from "react";

export default function MeuContador(){


const [contador, setContador] = useState(0);

    

    function aumentar(){
        setContador(contador + 1);
    }

    function diminuir(){
        setContador(contador - 1);
    }


    if( contador > 5){

        <h1>Contador maior que 5 </h1>

    }
    return(
        <>
        
        <div>
            <h1>Meu contador</h1>
            <h3>{contador}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </div>
        </>

    )
}