import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { LoginScreen } from 'components'

const LoginContainer = styled.div`

`

class Login extends Component {
  render () {
    return (
      <LoginContainer>
        <LoginScreen />
      </LoginContainer>
    )
  }
}

export default Login;
