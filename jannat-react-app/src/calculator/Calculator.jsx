import { useState } from "react";

const OPERATIONS = ["+", "-", "*", "/"];
function Operation({ label, handleOnClick }) {
  return <button onClick={handleOnClick}>{label}</button>;
}
function Calculator() {
  // const [number1, setNumber1] = useState();
  // const [number2, setNumber2] = useState();
  const [numbers, setNumbers] = useState([0, 0]);
  const [result, setResult] = useState();

  // function handleOnChange1(e) {
  //   setNumber1(parseInt(e.target.value));
  // }
  // function handleOnChange2(e) {
  //   setNumber2((e.target.value));
  // }
  function handleOnChange(value, index) {
    const newNumbers = [...numbers];
    newNumbers[index] = parseInt(value);
    setNumbers(newNumbers);
  }
  function handleOperation(operationType) {
    switch (operationType) {
      case "+":
        setResult(numbers[0] + numbers[1]);
        break;
      case "-":
        setResult(numbers[0] - numbers[1]);
        break;
      case "*":
        setResult(numbers[0] * numbers[1]);
        break;
      case "/":
        setResult(numbers[0] / numbers[1]);
        break;
      default:
        break;
    }
  }
  return (
    <div className="calculator-wrap">
      <h1>Calculator App</h1>
      <div className="input">
        {/* <input type="number" value={number1} onChange = {handleOnChange1} />
        <input type="number" value={number2} onChange = {handleOnChange2}/> */}
        {/* <input type="number" onChange={(e) => handleOnChange(e.target.value, 0)} />
        <input type="number" onChange={(e) => handleOnChange(e.target.value, 1)} /> */}
        {[0, 1].map((id) => (
          <input
            key={id}
            type="number"
            onChange={(e) => handleOnChange(e.target.value, id)}
          />
        ))}
      </div>
      <div className="operations">
        {
          /* <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button> */
          OPERATIONS.map((operation, index) => (
            <Operation
              key={index}
              label={operation}
              handleOnClick={() => handleOperation(operation)}
            />
          ))
        }
      </div>
      <div>
        <h3>Result = {result}</h3>
      </div>
    </div>
  );
}

export default Calculator;
