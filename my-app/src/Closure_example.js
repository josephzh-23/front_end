import { useState } from "react";
/*
Here things are declared using increment and decrement, to encapsulate the logic for updating and all that 

*/
const Counter = () => {
    const [count, setCount] = useState(0);
  
    // State is declared inside the closure
    const createCounter = () => {
      const increment = () => {
        setCount((prevCount) => prevCount + 1);
        console.log('Incremented! Current count:', count + 1);
      };
  
      const decrement = () => {
        setCount((prevCount) => prevCount - 1);
        console.log('Decremented! Current count:', count - 1);
      };
  
      return { increment, decrement };
    };
  
    const counterInstance = createCounter();
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={counterInstance.increment}>Increment</button>
        <button onClick={counterInstance.decrement}>Decrement</button>
      </div>
    );
  };
  
  export default Counter;