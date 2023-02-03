function Operation({ label }) {
  return <button>{label}</button>;
}
function Calculator() {
  const operations = ["+", "-", "*", "/"];
  return (
    <div className="calculator-wrap">
      <h1>Calculator App</h1>
      <div className="input">
        <input type="number" />
        <input type="number" />
      </div>
      <div className="operations">
        {
          /* <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button> */
          operations.map((operation, index) => (
            <Operation key={index} label={operation} />
          ))
        }
      </div>
    </div>
  );
}

export default Calculator;
