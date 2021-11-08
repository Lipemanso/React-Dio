import { useState } from "react";
import Button from "../Button";

const Card = () => {

   const [valor, setValor] = useState(0);

   function adicionar(){
       setValor(valor + 1)
   }

   function remover(){
    setValor(valor - 1)
}

    return(
    <div className="card">
        <h5 className="card-header">Curso React</h5>
        <div className="card-body">
            <h5 className="card-title">Card Bootstrap</h5>
            <Button
                className="btn btn-success" 
                onClick={adicionar}
            >
               Adicionar
            </Button>
            <Button
                className="btn btn-danger" 
                onClick= {remover}
            >
                Remover
            </Button>
            <p className="card-text">{valor}</p>
        </div>
    </div>
    )
}

export default Card;