import { useState } from "react";

const CounterApp = () => {
  const [render, setRender] = useState(1);
  console.log(`N. de renderización: ${render}`);

  //Hook UseState
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    console.log("Has pulsado el botón de incrementar");
    setCounter(counter + 1); // 0 + 1 = 1
    setRender(render + 1);
    console.log(counter); // 0
  };

  const counterComponent = (
    <div className="counter-container">
      <h2 id="counter"> {counter} </h2>
      <div id="buttons">
        <button onClick={handleIncrement} id="add" type="button">
          Add
        </button>
        <button id="less" type="button">
          Less
        </button>
        <button id="restart" type="button">
          Restart
        </button>
      </div>
    </div>
  );

  return counterComponent;
};

export default CounterApp;
