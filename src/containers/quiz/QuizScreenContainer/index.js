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
  width: 90%;
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

const QuizNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  height: 60px;
`

const EachNavBlock = styled.div`
  width: 15px;
  height: 15px;
  margin: 5px;
  border-radius: 2px;
  background: #ccc;
  cursor: pointer;
  ${props => props.selected && css`
    background: blue;
  `}
  ${props => props.answered && css`
    background: #56b856;
  `}
`

class QuizScreenContainer extends Component {

  constructor (props) {
  	super(props);
  	this.state = {
      currentQues: 0,
      nextQues: 1,
      name: '',
      selectedAnswers: {},
      totalQuestions: Object.keys(QUESTION_ANSWER_MAP).length,
      isNotAllAnswered: false
    };
  }

  changeQuestion = (question) => {
    if (question == -1) {
      this.props.submitAllAnswersAndMove(this.state.selectedAnswers)
      return
    }
    this.setState({
      currentQues: question,
      nextQues: QUESTION_ANSWER_MAP[question].next
    })
  }

  forceMoveToResult = () => {
    this.props.submitAllAnswersAndMove(this.state.selectedAnswers)
  }

  saveAnswerAndMove = (quizObj, selectedAnswer) => {
    const { selectedAnswers } = this.state;
    let questionId = quizObj['current']
    selectedAnswers[questionId] = selectedAnswer;
    this.setState({selectedAnswers: selectedAnswers})
    if (quizObj.next > -1 || (Object.keys(selectedAnswers).length == this.state.totalQuestions)) {
      this.changeQuestion(quizObj.next)
      return;
    }
    // if (Object.keys(selectedAnswers).length < this.state.totalQuestions)
    this.setState({isNotAllAnswered: true})
  }

  handleInput = (e) => {
    this.setState({name: e.target.value})
  }

  saveName = () => {
    this.props.saveUserName(this.state.name)
    this.changeQuestion(1)
  }

  renderQuestionNavigation = () => {
    if (this.state.currentQues > 0) {
      return (
        <QuizNavigationContainer>
          {
            Object.keys(QUESTION_ANSWER_MAP).map((value, index) => {
              return (
                <EachNavBlock key={index} onClick={() => this.changeQuestion(value)} selected={parseInt(value) == this.state.currentQues} answered={this.state.selectedAnswers[value]}/>
              )
            })
          }
        </QuizNavigationContainer>
      )
    }
  }

  renderNameInput () {
    return (
      <QuizTransitionContainer visible={this.state.currentQues == 0}>
        <NameInputContainer>
          <Question>What is your name?</Question>
          <Answer value={this.state.name} placeholder="Enter name" onChange={this.handleInput} type="text" />
        <Button disabled={this.state.name.length < 3} label="Next" onClick={() => this.saveName()} />
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
            selectedAnswers={this.state.selectedAnswers}
            forceMoveToResult={this.forceMoveToResult}
            isNotAllAnswered={this.state.isNotAllAnswered}
          />
        </QuizTransitionContainer>
      )
    })
  }

  render () {
    const { changeScreen } = this.props
    return (
      <QuizSectionContainer>
        {this.renderQuestionNavigation()}
        {this.renderNameInput()}
        {this.renderEachQuestionScreen()}
      </QuizSectionContainer>
    )
  }

}

QuizScreenContainer.propTypes = propTypes
QuizScreenContainer.defaultProps = defaultProps

export default QuizScreenContainer
