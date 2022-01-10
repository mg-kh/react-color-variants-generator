import React, { Component } from 'react'
import {
  loginWithGoogle,
  loginWithFacebook,
  loginWithGithub,
  loginWithTwitter,
} from '../../utils/auth'

function SocialLogin(OriginalComponent, type) {
  class NewComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        response: {},
      }
    }

    handleLogin = async () => {
      switch (type) {
        case 'google':
          try {
            const { displayName, photoURL, uid } = await loginWithGoogle()
            this.setState({
              response: { displayName, photoURL, uid },
            })
          } catch (error) {
            //
          }
          break
        case 'facebook':
          try {
            const { displayName, photoURL, uid } = await loginWithFacebook()
            this.setState({
              response: { displayName, photoURL, uid },
            })
          } catch (error) {
            //
          }
          break
        case 'github':
          try {
            const { displayName, photoURL, uid } = await loginWithGithub()
            this.setState({
              response: { displayName, photoURL, uid },
            })
          } catch (error) {
            //
          }
          break
        case 'twitter':
          try {
            const { displayName, photoURL, uid } = await loginWithTwitter()
            this.setState({
              response: { displayName, photoURL, uid },
            })
          } catch (error) {
            //
          }
          break

        default:
          break
      }
    }

    render() {
      return (
        <OriginalComponent
          handleLogin={this.handleLogin}
          response={this.state.response}
          {...this.props}
        />
      )
    }
  }

  return NewComponent
}

export default SocialLogin
