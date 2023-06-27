import ComponentB from "./ComponentB";
import { useState } from "react";

const ComponentA = (props) => {
    const valueX = 42;
    
    return (
        <div className="ComponentA" >
            <h1>Component A</h1>
            <p>X = {valueX} </p>
            <ComponentB valueX = '42' />
        </div>
    )
}

export default ComponentA;