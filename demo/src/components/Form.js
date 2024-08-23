import React, { Component } from 'react'

 class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username:'',
       comment:'',
       topic:'react'
    }
  }

  handleusername=(event)=>{
    this.setState({
      username: event.target.value
    })
  }
  handleComments=(comment)=>{
    this.setState({
      comment:comment.target.value
    })
  }
  handleTopic=(topic)=>{
    this.setState({
      topic:topic.target.value
    })
  }
  handleSubmit=(submit)=>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic} is the details you have provided...`)
    submit.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.handleusername} />
        </div>
        <div>
          <label>Comments</label>
          <input type="text" value={this.state.comment} onChange={this.handleComments} />
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopic} >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="java">Java</option>
            <option value="html">HTML</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form