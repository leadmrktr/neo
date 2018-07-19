import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Button } from 'components'

const propTypes = {}
const defaultProps = {}

const IntroScreen = styled.div`
  min-height: calc(100vh - 60px);
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

  renderTypeTwoIntro = () => {
    const { changeScreen } = this.props;
    return (
      <IntroScreen>
        <IntroCard>
          <Heading>What type of boss are you?</Heading>
          <Text>5 quick questions to understand what type of boss are you w.r.t SAAS industry standards </Text>
          <Button label="Start" onClick={() => changeScreen (2)} />
        </IntroCard>
      </IntroScreen>
    )
  }

  render () {
    const { changeScreen } = this.props;
    const { type } = this.props;
    console.log("type here", type);
    if (type === 2) {
      return this.renderTypeTwoIntro()
    }
    return (
      <IntroScreen>
        <IntroCard>
          <Heading>How efficient is your support?</Heading>
          <Text>4 quick questions to understand how your support team stands w.r.t SAAS industry standards </Text>
          <Button label="Start" onClick={() => changeScreen (2)} />
        </IntroCard>
      </IntroScreen>
    )
  }

}

QuizIntroScreen.propTypes = propTypes
QuizIntroScreen.defaultProps = defaultProps

export default QuizIntroScreen
