import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { LoginCard } from 'components'
import { GlobalImages } from 'assets'

const propTypes = {}
const defaultProps = {}

const LoginScreenContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

const LeftSection = styled.div`
  flex: 1;
  background-color: var(--dark-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Image = styled.img`

`

const Heading = styled.h1`
  font-size: 2.5em;
  margin-top: 0em;
  margin-bottom: 0.25em;
  color: var(--dark-gray);
  &.logo-heading{
    color: var(--white);
  }
`

const Text = styled.p`
  margin-top: 0px;
  font-size: 1.5em;
  max-width: 350px;
  text-align: center;
  color: var(--gray);
  font-weight: 300;
`

class LoginScreen extends Component {
  render () {
    return(
      <LoginScreenContainer>
        <LeftSection>
          <Heading className="logo-heading">LeadMrktr</Heading>
          <LoginCard />
        </LeftSection>
        <RightSection>
          <Image src={GlobalImages.bulb} />
          <Heading>Hello! Welcome back</Heading>
          <Text>Let's make your lead generation predictable</Text>
        </RightSection>
      </LoginScreenContainer>
    );
  }
}

LoginScreen.propTypes = propTypes
LoginScreen.defaultProps = defaultProps

export default LoginScreen
