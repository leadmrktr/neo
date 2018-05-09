import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { QuizScreen, QuizTransitionContainer, Button } from 'components'
import { neoConstants } from 'helpers'

const { QUESTION_ANSWER_MAP } = neoConstants

const propTypes = {}
const defaultProps = {}

const QuizSectionContainer = styled.div`

`

const NameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  min-height: 100vh;
  justify-content: center;
`

const Question = styled.h2`
  font-size: 2em;
  font-weight: 400;
  color: #04047d;
  margin-bottom: 0em;
`

const Answer = styled.input`
  margin: 1em 0em;
  padding: .5em;
  border: none;
  border-bottom: 2px solid #4787ed;
  margin-bottom: 2em;
  outline: none;
  font-size: 2em;
`

class QuizScreenContainer extends Component {

  constructor (props) {
  	super(props);
  	this.state = {
      currentQues: 0,
      nextQues: 1,
      name: '',
      selectedAnswers: []
    };
  }

  changeQuestion = (question) => {
    if (question == -1) {
      this.props.submitAllAnswersAndMove(this.state.selectedAnswers)
      // this.props.changeScreen(3)
      return
    }
    this.setState({
      currentQues: question,
      nextQues: QUESTION_ANSWER_MAP[question].next
    })
  }

  saveAnswerAndMove = (quizObj, selectedAnswer) => {
    const { selectedAnswers } = this.state;
    selectedAnswers.push(selectedAnswer);
    this.setState({selectedAnswers: selectedAnswers})
    this.changeQuestion(quizObj.next)
  }

  handleInput = (e) => {
    this.setState({name: e.target.value})
  }

  renderNameInput () {
    return (
      <QuizTransitionContainer visible={this.state.currentQues == 0}>
        <NameInputContainer>
          <Question>What is your name?</Question>
          <Answer value={this.state.name} placeholder="Enter name" onChange={this.handleInput} type="text" />
          <Button disabled={this.state.name.length < 3} label="Next" onClick={() => this.changeQuestion(1)} />
        </NameInputContainer>
      </QuizTransitionContainer>
    )
  }

  renderEachQuestionScreen () {
    return Object.keys(QUESTION_ANSWER_MAP).map((value, index) => {
      const eachQandA = QUESTION_ANSWER_MAP[value]
      return (
        <QuizTransitionContainer visible={this.state.currentQues == value} key={index}>
          <QuizScreen
            quizObj={eachQandA}
            changeQuestion={this.changeQuestion}
            name={this.state.name}
            saveAnswerAndMove={this.saveAnswerAndMove}
          />
        </QuizTransitionContainer>
      )
    })
  }

  render () {
    const { changeScreen } = this.props
    return (
      <QuizSectionContainer>
        {this.renderNameInput()}
        {this.renderEachQuestionScreen()}
      </QuizSectionContainer>
    )
  }

}

QuizScreenContainer.propTypes = propTypes
QuizScreenContainer.defaultProps = defaultProps

export default QuizScreenContainer
