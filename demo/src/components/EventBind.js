import React, { Component } from 'react'

class EventBind extends Component {

    
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
      // this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'goodbye'
    //     })
    //     console.log(this)
    // }
    clickHandler=()=>{
        this.setState({
            message: 'Goodbye'
        })
    }
  render() {
    return (
      <div>
        {this.state.message}
        {/* <button onClick={this.clickHandler.bind(this)}>Event clicked</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Event clicked</button> */}
        <button onClick={this.clickHandler}>Event clicked</button>
      </div>
    )
  }
}

export default EventBind