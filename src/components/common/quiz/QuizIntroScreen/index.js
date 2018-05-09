import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Button } from 'components'

const propTypes = {}
const defaultProps = {}

const IntroScreen = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const IntroCard = styled.div`
  width: 90%;
  max-width: 700px;
  padding: 2em;
  box-shadow: 0px 0px 4px 1px #dedede;
  button{
    border-radius: 3px;
    padding: .8em;
  }
`

const Heading = styled.h1`
  font-size: 2.3em;
  color: #444;
`

const Text = styled.p`
  color: var(--gray);
`

class QuizIntroScreen extends Component {

  render () {
    const { changeScreen } = this.props;
    return (
      <IntroScreen>
        <IntroCard>
          <Heading>How efficient is your support?</Heading>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </Text>
          <Button label="Start" onClick={() => changeScreen (2)} />
        </IntroCard>
      </IntroScreen>
    )
  }

}

QuizIntroScreen.propTypes = propTypes
QuizIntroScreen.defaultProps = defaultProps

export default QuizIntroScreen
