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
import { saveUserData } from 'actions'

const propTypes = {}
const defaultProps = {}

const QuizSectionContainer = styled.div`

`

class Quiz extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentScreen: 1,
      selectedAnswers: [],
      userName: ''
    };
  }

  changeScreen = (screenNumber) => {
    this.setState({
      currentScreen: screenNumber
    })
  }

  submitAllAnswersAndMove = (answers) => {
    this.setState({selectedAnswers: answers})
    this.changeScreen(3)
  }

  saveUserName = (name) => {
    this.setState({userName: name})
  }

  saveUserDetails = (email, callback) => {
    const { dispatch } = this.props;
    let userData = {
      name: this.state.userName,
      email: email
    }
    dispatch(saveUserData(userData, callback));
  }

  render () {
    const { currentScreen, selectedAnswers } = this.state
    return(
      <QuizSectionContainer>
        <QuizTransitionContainer visible={currentScreen == 1}>
          <QuizIntroScreen
            changeScreen={this.changeScreen}
          />
        </QuizTransitionContainer>
        <QuizTransitionContainer visible={currentScreen == 2}>
          <QuizScreenContainer
            changeScreen={this.changeScreen}
            submitAllAnswersAndMove={this.submitAllAnswersAndMove}
            saveUserName={this.saveUserName}
          />
        </QuizTransitionContainer>
        <QuizTransitionContainer visible={currentScreen == 3}>
          <QuizSubmission
            changeScreen={this.changeScreen}
            selectedAnswers={selectedAnswers}
            saveUserDetails={this.saveUserDetails}
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
