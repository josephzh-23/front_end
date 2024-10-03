/*
This is where useImperativeHandle comes in.
 It allows the child component to expose certain functions or properties to the parent component,
  which can be accessed through the ref. 
  
  This provides a more explicit way for the parent component to interact with the child component.

  useImperativeHandle is typically used in situations where a parent component needs to interact with a child component directly. Some common use cases for useImperativeHandle include:
*/


import { forwardRef, useImperativeHandle, useRef, useState } from "react";

// Child Component
const ChildComponent = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);
  
    useImperativeHandle(ref, () => ({
      increment() {
        setCount(count + 1);
      },
      getCount() {
        return count;
      }
    }));
  
    return <div>{count}</div>;
  });
  
  // Parent Component
  const ParentComponent = () => {
    const childRef = useRef();
  
    const handleClick = () => {
      childRef.current.increment();
    };
  
    return (
      <>
        <ChildComponent ref={childRef} />
        <button onClick={handleClick}>Increment</button>
      </>
    );
  };