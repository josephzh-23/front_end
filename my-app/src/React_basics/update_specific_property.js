import { useState } from "react"



export function SpecificName() {
    const [input, setInput] = useState("")
    const [user, setUser] = useState({
        name: "john",
        email: "john@gmail.com",
        images: []
    })

    const changeUser = () => {
        setUser((prev) => ({ ...prev, name: input }))
    }
    
    return (
        <div>
            <h2>User: </h2>
            <input
                onChange={(e) => setInput(e.target.value)}
                placeHolder="enter a new name" />
            <button onClick={changeUser}>Change username</button>
            <span> Username is : {user.name}</span>
        </div>
    )
}