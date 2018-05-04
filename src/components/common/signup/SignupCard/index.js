import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from 'components'

const propTypes = {}
const defaultProps = {}

const CardContainer = styled.div`
  padding: 2em;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 0px 4px 1px #357ae8;
  width: 75%;
  max-width: 400px;
  button{
    width: 100%;
    border-radius: 4px;
    margin-top: 1em;
  }
`

const Heading = styled.h2`

`

const Input = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  padding: .75em;
  margin: 1em 0em;
  border-radius: 3px;
  outline: none;
`

const ButtonSection = styled.div`

`

const Label = styled.p`
  color: #2f5bb7;
  text-align: center;
  font-size: .9em;
  cursor: pointer;
`

class SignupCard extends Component {
  render () {
    const { username, handleEmailInput, password, handlePasswordInput, loginUser, fullName } = this.props;
    return (
      <CardContainer>
        <Heading>Login</Heading>
        <Input name="name" type="text" placeholder="Full name" value={fullName} onChange={handleEmailInput}/>
        <Input name="email" type="text" placeholder="Username" value={username} onChange={handleEmailInput}/>
        <Input name="password" type="password" placeholder="Password" value={password} onChange={handlePasswordInput}/>
        <ButtonSection>
          <Button label="Login" onClick={loginUser} />
          <Label>Already have an account? Login!</Label>
        </ButtonSection>
      </CardContainer>
    )
  }
}

SignupCard.propTypes = propTypes
SignupCard.defaultProps = defaultProps

export default SignupCard
