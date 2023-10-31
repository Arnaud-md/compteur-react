import { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);
    //let count = 0;
    const handleClickPlus = useCallback(
        () => {
            if(count<10) {
            setCount(count+1)
            }
        }, [count]
    );
    const handleClickMoins = useCallback(
        () => {
            if(count>0) {
            setCount(count-1)
            }
        }, [count]
    );
    const countLimit = useMemo(
        () => {
            if(count>10) {
                return 10
            }
            else {
                return count
            }
        }
        , [count]
    );
    return (
        <div>
            <p>Compteur : {countLimit}</p>
            <button onClick={handleClickPlus}>+</button>
            <button onClick={handleClickMoins}>-</button>
        </div>
    );
};

export default Counter;