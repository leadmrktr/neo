import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { QuizScreen, QuizTransitionContainer, Button } from 'components'
import { neoConstants } from 'helpers'

const { QUESTION_ANSWER_MAP, WHAT_TYPE_OF_BOSS_ARE_YOU } = neoConstants

const propTypes = {}
const defaultProps = {}

const QuizSectionContainer = styled.div`

`

const NameInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  min-height: calc(100vh - 60px);
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
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
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
      currentQues: 1,
      nextQues: 2,
      name: '',
      selectedAnswers: {},
      totalQuestions: this.props.type == 2? Object.keys(WHAT_TYPE_OF_BOSS_ARE_YOU).length: Object.keys(QUESTION_ANSWER_MAP).length,
      isNotAllAnswered: false,
      questionMap: this.props.type == 2? WHAT_TYPE_OF_BOSS_ARE_YOU: QUESTION_ANSWER_MAP
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.props.type) {
      this.setState(
        {
          totalQuestions: nextProps.type == 2? Object.keys(WHAT_TYPE_OF_BOSS_ARE_YOU).length: Object.keys(QUESTION_ANSWER_MAP).length,
          questionMap: nextProps.type == 2? WHAT_TYPE_OF_BOSS_ARE_YOU: QUESTION_ANSWER_MAP
        }
      )
    }
  }

  changeQuestion = (question) => {
    if (question == -1) {
      this.props.submitAllAnswersAndMove(this.state.selectedAnswers)
      return
    }
    this.setState({
      currentQues: question,
      nextQues: this.state.questionMap[question].next
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

  saveName = (e) => {
    e.preventDefault()
    this.props.saveUserName(this.state.name)
    this.changeQuestion(1)
  }

  renderQuestionNavigation = () => {
    if (this.state.currentQues > 0) {
      return (
        <QuizNavigationContainer>
          {
            Object.keys(this.state.questionMap).map((value, index) => {
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
        <NameInputContainer onSubmit={this.saveName}>
          <Question>What is your name?</Question>
          <Answer value={this.state.name} placeholder="Enter name" onChange={this.handleInput} type="text" />
          <Button disabled={this.state.name.length < 3} label="Next" type="submit" />
        </NameInputContainer>
      </QuizTransitionContainer>
    )
  }

  renderEachQuestionScreen () {
    const { questionMap } = this.state;
    return Object.keys(questionMap).map((value, index) => {
      const eachQandA = questionMap[value]
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
