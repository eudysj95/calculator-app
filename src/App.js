/* eslint-disable no-unused-vars */

import { useState } from 'react';
import './App.css';

function App() {

  const [inputState, setInputState] = useState("0");
  const [operacion, setOperacion] = useState("");
  const [viejoValor, setViejoValor] = useState(0);
  const [nuevoValor, setNuevoValor] = useState(0);
  const [operando, setOperando] = useState(false);
  

  const mostrarInput = e => {
    e.preventDefault();
    let valorInput = e.target.textContent;

    if(parseInt(inputState) === 0 && operando === false){
      setInputState(valorInput);
    }else if(parseInt(inputState) !== 0 && operando === false){
      setInputState(inputState + valorInput);
    }else if(operando === true && nuevoValor === 0){
      setInputState(valorInput);
      setNuevoValor(valorInput);
    }else if(operando === true && nuevoValor !== 0){
      setInputState(inputState + valorInput);
      setNuevoValor(parseInt(inputState) + valorInput);
    }
    
  }

  const sumar = e => {
    e.preventDefault();
    
    setViejoValor(parseInt(inputState));
    setOperando(true);
    setOperacion("suma");
    setInputState(inputState + "+");
    
  }

  const restar = e => {
    e.preventDefault();
    
    setViejoValor(parseInt(inputState));
    setOperando(true);
    setOperacion("resta");
    setInputState(inputState + "-");
    
  }

  const multiplicar = e => {
    e.preventDefault();
    
    setViejoValor(parseInt(inputState));
    setOperando(true);
    setOperacion("multiplicacion");
    setInputState(inputState + "*");
    
  }

  const dividir = e => {
    e.preventDefault();
    
    setViejoValor(parseInt(inputState));
    setOperando(true);
    setOperacion("division");
    setInputState(inputState + "/");
    
  }

  const simboloIgual = e => {
    e.preventDefault();
    var nuevoInput;

    if(operacion === "suma"){
      nuevoInput = parseInt(viejoValor) + parseInt(nuevoValor);
    }else if(operacion === "resta"){
      nuevoInput = parseInt(viejoValor) - parseInt(nuevoValor);
    }else if(operacion === "multiplicacion"){
      nuevoInput = parseInt(viejoValor) * parseInt(nuevoValor);
    }else if(operacion === "division"){
      nuevoInput = parseInt(viejoValor) / parseInt(nuevoValor);
    }
    

    setOperacion("");
    setOperando(false);
    setViejoValor(nuevoInput);
    setNuevoValor(0);
    setInputState(nuevoInput);
    

  }

  const reset = e => {
    e.preventDefault();

    setOperacion("");
    setOperando(false);
    setViejoValor(0);
    setNuevoValor(0);
    setInputState("0");
  }

  const borrar = e => {
    e.preventDefault();

    let nuevoInput = inputState.slice(0, inputState.length-1);

    setInputState(nuevoInput);

  }


  return (
    <div className="container">

      <div className='divInput'>
        
        <input type="number" className='input' name="input" placeholder={inputState}/>

      </div>

      <div className='containerTeclas'>
        
        <div className='teclas'>
          
          <button className='boton' name="num7" id="num7" onClick={mostrarInput}>7</button>
          <button className='boton' name="num8" id="num8" onClick={mostrarInput}>8</button>
          <button className='boton' name="num9" id="num9" onClick={mostrarInput}>9</button>
          <button className='boton' name="del" id="del" onClick={borrar}>DEL</button>
          <button className='boton' name="num4" id="num4" onClick={mostrarInput}>4</button>
          <button className='boton' name="num5" id="num5" onClick={mostrarInput}>5</button>
          <button className='boton' name="num6" id="num6" onClick={mostrarInput}>6</button>
          <button className='boton' name="mas" id="mas" onClick={sumar}>+</button>
          <button className='boton' name="num1" id="num1" onClick={mostrarInput}>1</button>
          <button className='boton' name="num2" id="num2" onClick={mostrarInput}>2</button>
          <button className='boton' name="num3" id="num3" onClick={mostrarInput}>3</button>
          <button className='boton' name="menos" id="menos" onClick={restar}>-</button>
          <button className='boton'></button>
          <button className='boton' name="num0" id="num0" onClick={mostrarInput}>0</button>
          <button className='boton' name="entre" id="entre" onClick={dividir}>/</button>
          <button className='boton'name="por" id="por" onClick={multiplicar}>*</button>

          <button className='boton reset' onClick={reset}>RESET</button>
          <button className='boton igual' onClick={simboloIgual}>=</button>

        </div>

      </div>

    </div>
  );
}

export default App;
