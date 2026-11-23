import { useState } from "react";

function FunctionalComponent({ name }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Functional Component</h2>
      <p>Hello, {name}! Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default FunctionalComponent;