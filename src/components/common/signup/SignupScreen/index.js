import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { SignupCard } from 'components'
import { GlobalImages } from 'assets'

const propTypes = {}
const defaultProps = {}

const SignupScreenContainer = styled.div`
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

class SignupScreen extends Component {
  render () {
    return(
      <SignupScreenContainer>
        <LeftSection>
          <Heading className="logo-heading">LeadMrktr</Heading>
          <SignupCard />
        </LeftSection>
        <RightSection>
          <Image src={GlobalImages.arrow_up} />
          <Heading>lead generation made easy!</Heading>
        </RightSection>
      </SignupScreenContainer>
    );
  }
}

SignupScreen.propTypes = propTypes
SignupScreen.defaultProps = defaultProps

export default SignupScreen
