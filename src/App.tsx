import { useState } from 'react'
import { useCallback } from 'react'
import './App.css'
import Counter from './Counter'
import Compteur from './Compteur'
import Counter4 from './Counter4'
// import Compteur4 from './Compteur4'
import Compteur5 from './Compteur5'

function App() {
  //let [cptP, setCptP] = useState(0);
  let [cpt1,setCpt1] = useState(0);
  let [cpt2,setCpt2] = useState(0);
  const handleClick = useCallback(
    // () => setCptP(cptP+1)
    // , [cptP]
    () => {setCpt1(cpt1+1);
          setCpt2(cpt2+1);}
    , [cpt1,cpt2]
  );
  const handleRollPlus1 = useCallback(
    () => {setCpt1(cpt1+1);}
    , [cpt1]
    );
  const handleRollPlus2 = useCallback(
    () => {setCpt2(cpt2+1);}
    , [cpt2]
    );
  const handleRollMoins1 = useCallback(
    () => {setCpt1(cpt1-1);}
    , [cpt1]
    );
  const handleRollMoins2 = useCallback(
    () => {setCpt2(cpt2-1);}
    , [cpt2]
    );
  return (
    <>
      {/* <div>
        <Counter />
      </div>
      <div>
        <Compteur cptP={cptP} />
      </div>
      <div>
        <Compteur cptP={cptP}/>
      </div>
      <div>
        <button onClick={handleClick}>+</button>
      </div>
      <div>
        <Counter4 cptP={cptP}/>
      </div>
      <div>
        <Counter4 cptP={cptP}/>
      </div> */}
      <div>
        <Compteur5 cpt={cpt1}
          onRollPlus={ handleRollPlus1}
          onRollMoins={handleRollMoins1}
          
          />
      </div>
      <div>
        <Compteur5 cpt={cpt2}
        onRollPlus={handleRollPlus2}
        onRollMoins={handleRollMoins2}
        
        />
      </div>
      <div>
        <button onClick={handleClick}>+</button>
      </div>
    </>
  )
}

export default App
