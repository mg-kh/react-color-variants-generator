import React, { Component } from 'react'

class SocialLoginButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.handleLogin}
        className="w-full h-full rounded-lg border-2 border-dashed border-purple-600 hover:border-0 hover:bg-purple-600"
      >
        {this.props.children}
      </button>
    )
  }
}

export default SocialLoginButton
