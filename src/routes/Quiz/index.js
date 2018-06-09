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
import { GlobalImages } from 'assets'

const propTypes = {}
const defaultProps = {}

const QuizSectionContainer = styled.div`

`

const PoweredBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: #999;
  font-size: .9em;
  background: #f7f7f7;
`

const Image = styled.img`
  height: 22px;
  margin-left: 5px;
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
        <PoweredBy>
          by
          <a href="https://www.kommunicate.io/?utm_source=QUIZ&utm_medium=manual&utm_campaign=good_is_your_support&utm_term=Customer%20support&utm_content=Quiz" rel="noopener" target="_blank">
            <Image src={GlobalImages.kommunicateLogo} />
          </a>
        </PoweredBy>
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
