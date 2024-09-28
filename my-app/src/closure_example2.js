import { useEffect, useState } from "react";

export default function ClosureExample2() {
  
    const [state, toggle] = useState(0);
  
    useEffect(()=>{
    
    setInterval(()=>{
      console.log(`state ${state}`);
    },3000)
  
    },[])
    
    return (       <div>       
            <h2>{`${state}`}</h2>       
           <button onClick={() => { toggle(state+1)                  }}>Increase</button>
                  </div>
)
}