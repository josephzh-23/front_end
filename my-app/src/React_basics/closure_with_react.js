import { useEffect, useRef, useState } from "react";
/*
This is the problem the same as stale closure here 

2 ways to solve it either do a cleanup or do a count down there 


*/
export default function ClosureExample2() {

    const [count, setCount] = useState(0);
    const countRef = useRef(0)

    countRef.current = count
    /*
    the below will not work
    state is derviced from state above at the moment, it will 
    call the function with that value when function is called 

function handleAlertClick() {
        setTimeout(() => {
            alert("You clicked on : " + count)
        }, 3000)
    }

    The solution is to use a Useref
    */
    function handleAlertClick() {
        setTimeout(() => {
            alert("You clicked on : " + countRef.current)
        }, 3000)
    }

    return (<div>
        <h2>You ckicked on {`${count}`} times </h2>
        <button onClick={handleAlertClick}>Increase</button>
    </div>
    )
}