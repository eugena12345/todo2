import React from "react";

const someFunction = () => {
    console.log('Click Add Task')
}

const InputTask = (props) => {
    return (
        <div className='inputTask'>
            {/* <input className='inputTask2' type="text" placeholder="i want to..."> */}
            <button onClick={someFunction}>Add Task</button>
        </div>
    )
}

export default InputTask;