import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count,setCount]=useState(0)
    
    const increaseCount=()=>{
    setCount((prev)=>prev+1);
    console.log(count);
    }
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increaseCount}>increaseCount</button>
    </div>
  )
}

export default UseState