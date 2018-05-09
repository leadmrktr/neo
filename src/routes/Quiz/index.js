import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Transition } from 'react-transition-group'
import {
  QuizTransitionContainer,
  QuizIntroScreen,
  QuizSubmission
} from 'components'
import { QuizScreenContainer } from 'containers'

const propTypes = {}
const defaultProps = {}

const QuizSectionContainer = styled.div`

`

class Quiz extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentScreen: 1,
      selectedAnswers: []
    };
  }

  changeScreen = (screenNumber) => {
    this.setState({
      currentScreen: screenNumber
    })
  }

  submitAllAnswersAndMove = (answers) => {
    this.setState({selectedAnswers: answers})
    console.log("selectedAnswers", answers);
    this.changeScreen(3)
  }

  render () {
    const { currentScreen, selectedAnswers } = this.state
    return(
      <QuizSectionContainer>
        <QuizTransitionContainer visible={currentScreen == 1}>
          <QuizIntroScreen changeScreen={this.changeScreen} />
        </QuizTransitionContainer>
        <QuizTransitionContainer visible={currentScreen == 2}>
          <QuizScreenContainer
            changeScreen={this.changeScreen}
            submitAllAnswersAndMove={this.submitAllAnswersAndMove}
          />
        </QuizTransitionContainer>
        <QuizTransitionContainer visible={currentScreen == 3}>
          <QuizSubmission
            changeScreen={this.changeScreen}
            selectedAnswers={selectedAnswers}
          />
        </QuizTransitionContainer>
      </QuizSectionContainer>
    )
  }
}

Quiz.propTypes = propTypes
Quiz.defaultProps = defaultProps

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Quiz)
