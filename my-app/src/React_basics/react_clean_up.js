import { useEffect, useState } from "react";
/*
Mistake 1 here 
*/
export default function CleanUp() {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log("effect runs");
        const interval = setInterval(() => {

            setNumber(prev => prev + 1)
        }, 1000);
    //And now using this there si no side effect here, otherwise will rerender as said 

        return () => {

            clearInterval(interval)
        }
    }, [])

    return (

        <div>{number}</div>
    )
}