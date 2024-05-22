import { useState } from "react";
import "./App.css";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>Счетчик: {counter}</div>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
};
