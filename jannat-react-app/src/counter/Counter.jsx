function Counter() {
  let count = 0;
  function incrementBy() {
    // console.log("increment button clicked..");
    count++;
  }
  function render() {
    return (
      <div className="counter-wrap">
        <h1>Counter App</h1>
        <button onClick={incrementBy}>increment</button>
        <p>{`Current Count: ${count}`}</p>
      </div>
    );
  }
  // console.log("rendering..");
  render();
}

export default Counter;
