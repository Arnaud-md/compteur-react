import { useState } from 'react'
import { useCallback } from 'react'
import './App.css'
import Counter from './Counter'
import Compteur from './Compteur'
import Counter4 from './Counter4'

function App() {
  let [cptP, setCptP] = useState(0);
  const handleClick = useCallback(
    () => setCptP(cptP+1)
    , [cptP]
  );
  return (
    <>
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
      </div>
      <div>
        <button onClick={handleClick}>+</button>
      </div>
    </>
  )
}

export default App
