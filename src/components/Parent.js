import React from "react";
import Child from "./Child";
import { useState } from "react";

const Parent = () =>{
    const [value, setValue] = useState('');

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            {value !== '' && <p>{value}</p>}
            <Child setValue = {setValue} value={value}/>
        </div>
    )
}

export default Parent;