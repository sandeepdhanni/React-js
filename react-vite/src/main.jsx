import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function MyApp(){
   return (
    <div>
      <h1>Sandeep</h1>
    </div>
   )
}
const anotherUser="coding with sandeep"
const reactElement={
  type:'a',
  props : {
      href:'https://google.com',
      target:'_blank'
  },
  Children: 'Click me to visit google',
  anotherUser
}

const google=(
  <a href="https://www.google.com">
    click me for google
  </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp />
    reactElement
    // google
)
