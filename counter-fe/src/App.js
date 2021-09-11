const App = () => {
  const increaseHandler = () => {
    console.log('Dale que sos bosch');
  }

  const decreaseHandler = () => {
    console.log('no sos bosch?');
  }

  return (
    <div className="App">
      <h2>My First Smart Contract: Counter</h2>
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
      <div>Counter: </div>
    </div>
  );
}

export default App;
