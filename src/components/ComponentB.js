import ComponentC from "./ComponetC";

const ComponentB = (props) => {
const {valueX} = props;
    return (
        <div className="ComponentB" >
            <h1>Componet B</h1>
            <p>X = {valueX} </p>
            <ComponentC/>
        </div>
    )
}

export default ComponentB;