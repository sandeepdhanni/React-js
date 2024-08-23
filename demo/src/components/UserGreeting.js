import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {

        //this is fourth approach which is short circuit operator
    return this.state.isLoggedIn && <div>Welcome Rohit babu</div>

        //this is third approaches which is cnditional ternary operator
    // return (
    // this.state.isLoggedIn?
    // <div>Welcome Rohit</div> :
    // <div>Welcome guest</div>
    // )

                  //this is the second approach which is element variables
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome sandeep</div>
    // }else{
    //     message=<div>Welcome guest</div>
    // }

    // return <div>{message}</div>


             //this is the first approach which is if else
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>Welcome Sandeep</div>
    //     )
    // }else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome Guest</div>
    //     <div>Welcome sandeep</div>
    //     </div>
    // )
  }
}

export default UserGreeting