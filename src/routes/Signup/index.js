import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SignupScreen } from 'components'

const SignupContainer = styled.div`

`

class Signup extends Component {
  render () {
    return (
      <SignupContainer>
        <SignupScreen />
      </SignupContainer>
    )
  }
}

export default Signup;
