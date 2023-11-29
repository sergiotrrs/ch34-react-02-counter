const CounterApp = () => {
  const counterComponent = (
    <div className="counter-container">
      <h2 id="counter">0</h2>
      <div id="buttons">
        <button id="add" type="button">
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
