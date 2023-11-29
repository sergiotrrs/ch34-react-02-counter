import { useState } from "react";
import { Button } from "../button/Button";

const CounterApp = () => {

  //Hook UseState
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1); 
  };

  const handleDecrement = () => {
    setCounter( counter - 1);
  }

  // Agregar la funcionalidad para el botón decrement y reset

  const counterComponent = (
    <div className="counter-container">
      <h2 id="counter"> {counter} </h2>
      <div id="buttons">
        <Button onClick={handleIncrement} >Add</Button>
        <Button onClick={handleDecrement} >Less</Button>        
        <button onClick={ ()=>setCounter(0) }> Restart</button>
      </div>
    </div>
  );

  return counterComponent;
};

export default CounterApp;
