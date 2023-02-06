import { useState } from "react";

function Operation({ label, handleOnClick }) {
  return <button onClick={handleOnClick}>{label}</button>;
}
function Counter() {
  let [count, setCount] = useState(0);

  function handleOperation(operationType) {
    if(operationType === "+") {
      setCount(++count);
      if(count > 10) {
        alert("Count is greater than 10!");
      }
    }
    else if(operationType === "-") {
      setCount(--count);
      if(count < 0) {
        alert("Count is less than 0");
      }
    }
  }
  return (
    <div className="counter-wrap">
      <h1>Counter App</h1>
      <div className="button-wrap">
        {["+", "-"].map((operation, index) => (
          <Operation
            key={index}
            label={operation}
            handleOnClick={() => handleOperation(operation)}
          />
        ))}
      </div>
      <div>
        <h3>Count = {count}</h3>
      </div>
    </div>
  );
}

export default Counter;
