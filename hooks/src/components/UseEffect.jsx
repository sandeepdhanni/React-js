import React, {useEffect} from 'react'

function UseEffect() {
    const [count,setCount]=useEffect(0)

    useEffect(()=>{ 
        setTimeout(()=>{
            setCount(count=>count+1);
        },2000)
    },[count])
  return (
    <div>
        <h1>I've rendered {count} times..</h1>
    </div>
  )
}

export default UseEffect