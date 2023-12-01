import { useState } from "react";
import { useCallback } from "react";

const Compteur6 = (props:{count:number,eventClickPlus:()=>number[],eventClickMoins: () => number[]}) => {

    let [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {()=> setCount(props.eventClickPlus()[0]);
                                                //setCount(props.count)
                                                }
                                        ,[count]);
    const handleDecrement = useCallback(() => {()=> setCount(props.eventClickMoins()[0]);
                                                setCount(props.count)
                                                }
                                        ,[count]);

    return (
        <div>
            <p>Compteur : {count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
};

export default Compteur6;