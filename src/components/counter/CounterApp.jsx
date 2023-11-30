import { useState } from "react";
import { ButtonGroup, Button, Typography, Box } from "@mui/material";

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
    <Box p={2} m={2} borderRadius={16} bgcolor={ {xs:"primary.main", md:"success.main"} } >
      {/* <h2 id="counter"> {counter} </h2> */}
      <Typography
        sx={{ fontSize: { xs: "2rem", sm: "4rem", md: "6rem", lg: "8rem" } }}
        component="p"
      >
        {counter}
      </Typography>
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
    </Box>
  );

  return counterComponent;
};

export default CounterApp;
