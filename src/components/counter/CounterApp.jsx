import { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";

const CounterApp = () => {
  //Hook UseState
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  // Agregar la funcionalidad para el botón decrement y reset

  const counterComponent = (
    <div className="counter-container">
      <h2 id="counter"> {counter} </h2>
      <div id="buttons">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleIncrement}>Add</Button>
          <Button onClick={handleDecrement}>Less</Button>
          <Button onClick={() => setCounter(0)}>Restart</Button>
        </ButtonGroup>
      </div>
    </div>
  );

  return counterComponent;
};

export default CounterApp;
