import { useState } from "react";

const Button = () => {
    const [buttonX, setButtonX] = useState(0);

    const countClickX = () => {
        setButtonX(buttonX => buttonX + 1);

    };


    return (
        <div className="button">
            <p>X = <strong>{buttonX}</strong>  </p>
            <button onClick={countClickX}> X++ </button>
        </div>
    )
}

export default Button;

