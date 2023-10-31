import { useState } from "react";
import { useCallback } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);
    //let count = 0;
    const handleClickPlus = useCallback(
        () => setCount(count+1)
        , [count]
    );
    const handleClickMoins = useCallback(
        () => setCount(count-1)
        , [count]
    );
    return (
        <div>
            <p>Compteur : {count}</p>
            <button onClick={handleClickPlus}>+</button>
            <button onClick={handleClickMoins}>-</button>
        </div>
    );
};

export default Counter;