import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <section className="Counter">
      <p>
        Счетчик: <span>{counter}</span>
      </p>
      <div className="btns">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </section>
  );
}

export default Counter;
