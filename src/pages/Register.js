import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { sendLoginLinkToEmail } from '../utils/auth'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: React.createRef(),
    }
  }

  handleClick = async () => {
    try {
      sendLoginLinkToEmail(this.state.email.current.value)
    } catch (error) {
      //
    }
  }

  render() {
    return (
      <div className="container font-mono">
        <div className="max-w-sm m-auto mt-10 bg-white p-5 space-y-5">
          <h3 className="text-2xl font-semibold text-center text-purple-600">
            Register Here!
          </h3>
          <hr />
          <div className="space-y-4">
            <input
              type="email"
              ref={this.state.email}
              placeholder="Enter your email"
              className="rounded-lg h-12 w-full px-3 text-purple-600 border border-purple-600"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="rounded-lg h-12 w-full px-3 text-purple-600 border border-purple-600"
            />

            <button
              onClick={this.handleClick}
              className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-500 active:ring active:ring-purple-400"
            >
              Register
            </button>
          </div>
          <hr />
          <div className="space-y-2">
            <div className="text-sm">
              If you already have account, please
              <Link to="/login">
                <span className="text-purple-600 font-semibold"> Login!</span>
              </Link>
            </div>
            <div className="text-sm">
              Nothing interesting? Go to
              <Link to="/">
                <span className="text-purple-600 font-semibold"> Home!</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
