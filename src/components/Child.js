import React from "react";

const Child = ({ setValue, value }) =>{
    return (
        <div className="child">
            <h2>Child Component</h2>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
        </div>
    )
}

export default Child;