import React from "react";

const Greet=({name,heroName})=>{
   // const {name,heroName}=props
   return <h1>Hello {name} or {heroName}</h1>
}
export default Greet

// function greet(){
//     return <h1>This is sandeep</h1>
// }

// export default greet;


// import React, { useState, useEffect } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
//export default Counter;


