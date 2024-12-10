import {useState} from 'react'
import './App.css';
import UseEffect from './components/UseEffect';
import UseState from './components/UseState';
import UseEffect1 from './components/UseEffect1';

function App() {

  const [color,setColor]= useState('Red')

  const changeColor=()=>{
    setColor('Blue')
  }
  return (
    <>
     <h1>My Favourite color is {color}</h1>
     <button onClick={changeColor}>Blue</button>
     <UseEffect />
     <UseState />
     <UseEffect1 />
    </>
  );
}

export default App;
