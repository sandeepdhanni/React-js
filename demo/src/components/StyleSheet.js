import React from 'react'
import './styles.css' 

function StyleSheet(props) {
    let className=props.previous ? 'primary' : ""
  return (
    <div>
        <h2 className='previous'>Stylesheet</h2>
    </div>
  )
}

export default StyleSheet