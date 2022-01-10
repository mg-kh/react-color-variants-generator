import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SvgIcon from '../components/SvgIcon'
import SocialLoginButton from '../components/social_login_buttons/SocialLoginButton'
import FacebookLogin from '../components/social_login_buttons/FacebookLogin'
import GoogleLogin from '../components/social_login_buttons/GoogleLogin'
import TwitterLogin from '../components/social_login_buttons/TwitterLogin'
import GithubLogin from '../components/social_login_buttons/GithubLogin'

class Login extends Component {
  render() {
    return (
      <div className="container font-mono">
        <div className="max-w-sm m-auto bg-white p-5 mt-10 space-y-5">
          <h3 className="text-2xl font-semibold text-center text-purple-600">
            Login Here!
          </h3>
          <hr className="hidden" />

          <div className="space-y-4 hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg h-12 w-full px-3 text-purple-600 border border-purple-600"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="rounded-lg h-12 w-full px-3 text-purple-600 border border-purple-600"
            />

            <button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-500 active:ring active:ring-purple-400">
              Login
            </button>
          </div>

          <hr />
          <h3 className="text-purple-600 text-lg hidden">Login with...</h3>
          <div className="grid grid-cols-4">
            {/* Facebook */}
            <div className="w-14 h-14 m-auto">
              <FacebookLogin />
            </div>
            {/* Gmail */}
            <div className="w-14 h-14 m-auto">
              <GoogleLogin />
            </div>
            {/* Twitter */}
            <div className="w-14 h-14 m-auto">
              <TwitterLogin />
            </div>
            {/* Github */}
            <div className="w-14 h-14 m-auto">
              <GithubLogin />
            </div>
          </div>
          <hr />
          <div className="space-y-2">
            <div className="text-sm hidden">
              If you are new here, please
              <Link to="/register">
                <span className="text-purple-600 font-semibold">
                  {' '}
                  Register!
                </span>
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

export default Login
