import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import "../App.css";

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login-form">
            <div class="mb-3">
                <label for="userName" class="form-label">User Name</label>
                <input type="text" class="form-control" name="userName" onChange={this.handleChange}/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" name="password"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default LogIn