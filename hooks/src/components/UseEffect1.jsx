import React, { useState,useEffect } from 'react';  

const UseEffect1 = () => {

    const [data,setData]=useState([]);
    const [showPedro,setShowPedro]=useState(false);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((json)=>setData(json));
    },[]);

    useEffect(()=>{
        console.log("predro");
    },[showPedro])
  return (
    <div>
        <button onClick={()=>setShowPedro((prev)=>!prev)}>toggle</button>
        <h1>posts</h1>
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseEffect1