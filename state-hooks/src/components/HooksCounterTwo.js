import React, { useState } from 'react'

function HooksCounterTwo() {

    const initialCount=0
    const [count,setCount]=useState(initialCount)
  return (
    <div>
        Count : {count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Incremenet</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default HooksCounterTwo