import React from 'react'
import SocialLoginButton from './SocialLoginButton'
import SvgIcon from '../SvgIcon'
import SocialLogin from '../hoc/SocialLogin'

function FacebookLogin({ handleLogin }) {
  return (
    <SocialLoginButton handleLogin={handleLogin}>
      <SvgIcon isHover={true}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </SvgIcon>
    </SocialLoginButton>
  )
}

export default SocialLogin(FacebookLogin, 'facebook')
