import { useState } from "react";
import { useMemo } from "react";
const Compteur = (props: any) => {
    let [count, setCount] = useState(0);

    // const nbTotal = useMemo(
    //     () => count+{props.cptP}
    //     , [count]
    // );
    return (
        <div>
            <p>Compteur : {props.cptP}</p>
        </div>
    );
};

export default Compteur;