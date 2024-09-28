/*
Using this part here 

useCallback accepts as a first parameter a function and 
returns a memoized version of it (in terms of its memory location, not the computation done inside).
 Meaning that the returned function doesn't get recreated on a new memory reference every time the component re-renders, while a normal function inside a component does.

The returned function gets recreated on a new memory reference if one of the variables
 inside useCallback's dependency array (its second parameter) changes.

These are very important differences here so that's important 
*/
import { useCallback, useState } from "react";
import Todos from "./Todos";

 


export const UseCallbackEx= () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);
    const increment = () => {
      setCount((c) => c + 1);
    };

    // This basically addsa nother "new todo" each time to the todo list here 
    /*
    The wrong appraoch 
    Each time you click on the increment functino ehre 
    Without usecallback addtodo function gets recreated which will cause the Todo component to get rerendererd

    Use the useCallback Hook to prevent the Todos component from re-rendering needlessly
    */
    // const addTodo = () => {
    //   setTodos((t) => [...t, "New Todo"]);
    // };

    /*
    The good approach 
    so now todo Component will only change when todos changes 
    */
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
      }, [todos]);
  
    return (
      <>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
       <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      </>
    );
  };

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 10; i++) {
      num += 1;
    }
    return num;
  };
  