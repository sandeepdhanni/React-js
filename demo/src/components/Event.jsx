import React, { Component } from 'react'

export class Event extends Component {
    event(){
        console.log("button clicked");
    }
  render() {
    return (
      <div>
        <button onClick={this.event}>event button</button>
      </div>
    )
  }
}
 
export default Event