import { useState } from "react";

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
        <button onClick={handleIncrement} id="add" type="button">
          Add
        </button>
        <button onClick={handleDecrement} id="less" type="button">
          Less
        </button>
        <button onClick={ ()=>setCounter(0)  } id="restart" type="button">
          Restart
        </button>
      </div>
    </div>
  );

  return counterComponent;
};

export default CounterApp;
