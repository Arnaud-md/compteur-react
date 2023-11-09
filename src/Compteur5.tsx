import { useState } from "react";
import { useCallback } from "react";

const Compteur5 = (props:{ onRollPlus: () => void, onRollMoins: () => void, cpt:number}) => {

    const handleIncrement = useCallback(() => props.onRollPlus(), [props.cpt]);

    return (
        <div>
            <p>Compteur : {props.cpt}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={props.onRollMoins}>-</button>
        </div>
    );
};

export default Compteur5;