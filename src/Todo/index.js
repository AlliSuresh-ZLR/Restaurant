import React, { useEffect, useState } from 'react'

function Todo() {
    const [task, setTask] = useState([])
    const [temp, settemp] = useState(0);
    // useEffect(() => {
    //     console.log(task);
    //     console.log(task.slice(-1));
        
    // }, [])
    return (

        <div>
            <center>


            <input onKeyDown={(e) => { if (e.key === "Enter") setTask([...task, e.target.value]) }} />
{task.map((item, index) => <h1 key={index}>{item}<button onClick={(e) => { task.splice(index, 1);settemp(temp+1);console.log(temp+"temo value ")}}>remove</button></h1>)}
            </center>
        </div>
    )


}

export default Todo