import React,{ useState } from 'react'

function Functcount() {
    const initialCount = 0;
   const [num, setnum] = useState(initialCount);

   const incresefive = () => {
       for (let i = 0; i < 4; i++) {
           setnum(prevnum => prevnum + 1)
           
       }
   } 
    return (
        <div>
            <h2>Count {num}</h2>
            <button onClick={() => setnum(prevnum => prevnum + 1)}>Increment</button> 
            <button onClick={() => setnum(prevnum => prevnum - 1)}>Decrement</button>
            <button onClick={() => setnum(initialCount)}>Reset</button>
            <button onClick={incresefive}>Increse  4</button>
             <button onClick={() => setnum(prevnum => prevnum - 7)}>Decrese 7</button>
        </div>
    )
}

export default Functcount

