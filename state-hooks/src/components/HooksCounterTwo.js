import React, { useState } from 'react'

function HooksCounterTwo() {

    const initialCount=0
    const [count,setCount]=useState(initialCount)


    const incrementFive= ()=>{
      for(let i=0;i<5;i++){
        //setCount(count+1) //but here we are passing the count which is 0 and it is incrementing that value
        setCount(prevCount=>prevCount+1) //in this we pass in the old value and increment that value with 1
      }
    }


  return (
    <div>
        Count : {count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Incremenet</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HooksCounterTwo