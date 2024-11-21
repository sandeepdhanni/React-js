// usestate with objects example

import React,{useState} from 'react'

function HookCounterThree() {

    const [name,setName]=useState({firstName: '',lastName:''})
  return (
    <div>
   {/* <input type='text' value={name.firstName} onChange={e=>setName({firstName: e.target.value})} />
   <input type='text' value={name.lastName} onChange={e=>setName({lastName: e.target.value})} />
   <h2>your firstname is - {name.firstName}</h2>
   <h2>your second name is - {name.lastName}</h2>
   <h2>{JSON.stringify(name)}</h2> */}
   {/* as u can see when u type in the firstname,lastname is hidden...because usestate does not 
   automatically merge and update the object..setstate will merge the state but usestate hook
    will not merge  */}


<input type='text' value={name.firstName} onChange={e=>setName({ ...name, firstName: e.target.value})} />
   <input type='text' value={name.lastName} onChange={e=>setName({ ...name, lastName: e.target.value})} />
   <h2>your firstname is - {name.firstName}</h2>
   <h2>your second name is - {name.lastName}</h2>
   <h2>{JSON.stringify(name)}</h2>
   </div>
)
}

export default HookCounterThree