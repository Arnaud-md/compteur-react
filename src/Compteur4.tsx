// import { useState } from "react";
// import { useCallback } from "react";

// const Compteur4 = (props:{ onRollPlus: (cpt1: number) => void, onRollMoins: (cpt1: number) => void,cpt1:number}) => {
//     //let count = 0;
    
//     const rollPlus = useCallback((cpt1:number) => {
//         const newValue = cpt1;
//         props.onRollPlus(newValue);
//         // setValue(newValue)
//     }, [props.onRollPlus])
//     const rollMoins = useCallback((cpt1:number) => {
//         const newValue = cpt1;
//         props.onRollMoins(newValue);
//         // setValue(newValue)
//     }, [props.onRollMoins])
//     return (
//         <div>
//             <p>Compteur : {props.cpt1}</p>
//             <button onClick={rollPlus(props.cpt1)}>+</button>
//             <button onClick={rollMoins}>-</button>
//         </div>
//     );
// };

// export default Compteur4;