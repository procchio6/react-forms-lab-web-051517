import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = (event) => {
    let {name, value} = event.target
    
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    let {username, password} = this.state
    event.preventDefault()

    if (!username || !password) {
      return
    } else {
      this.props.onSubmit(username, password)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" type="text" onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" type="password" onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
