
import { useState } from 'react';
import './App.css';

function App() {

  const [inputState, setInputState] = useState("0");
  

  const mostrarInput = e => {
    e.preventDefault();

    let valor = parseInt(e.target.textContent);
    if(parseInt(inputState) === 0){
      setInputState(valor);
    }else{
      setInputState(inputState+""+valor);
    }
    
  }

  const sumar = e => {
    e.preventDefault();

    
    if(parseInt(inputState) !== 0){
      setInputState(inputState + "+");
    }

  }

  return (
    <div className="container">

      <div className='divInput'>
        
        <input type="number" className='input' name="input" value={inputState}/>

      </div>

      <div className='containerTeclas'>
        
        <div className='teclas'>
          
          <button className='boton' name="num7" id="num7" onClick={mostrarInput}>7</button>
          <button className='boton' name="num8" id="num8" onClick={mostrarInput}>8</button>
          <button className='boton' name="num9" id="num9" onClick={mostrarInput}>9</button>
          <button className='boton' name="del" id="del" onClick={mostrarInput}>DEL</button>
          <button className='boton' name="num4" id="num4" onClick={mostrarInput}>4</button>
          <button className='boton' name="num5" id="num5" onClick={mostrarInput}>5</button>
          <button className='boton' name="num6" id="num6" onClick={mostrarInput}>6</button>
          <button className='boton' name="mas" id="mas" onClick={sumar}>+</button>
          <button className='boton' name="num1" id="num1" onClick={mostrarInput}>1</button>
          <button className='boton' name="num2" id="num2" onClick={mostrarInput}>2</button>
          <button className='boton' name="num3" id="num3" onClick={mostrarInput}>3</button>
          <button className='boton' name="menos" id="menos" onClick={mostrarInput}>-</button>
          <button className='boton' name="punto" id="punto" onClick={mostrarInput}>.</button>
          <button className='boton' name="num0" id="num0" onClick={mostrarInput}>0</button>
          <button className='boton' name="entre" id="entre" onClick={mostrarInput}>/</button>
          <button className='boton'>*</button>

          <button className='boton reset'>RESET</button>
          <button className='boton igual'>=</button>

        </div>

      </div>

    </div>
  );
}

export default App;
