import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Button } from 'components'

const propTypes = {}
const defaultProps = {}

const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  min-height: 100vh;
  justify-content: center;
`

const EachQuestion = styled.div`

`

const MainHead = styled.h1`
  font-size: 1.25em;
  font-weight: 400;
  margin-bottom: 2em;
  color: #666;
`

const Question = styled.h2`
  font-size: 2em;
  font-weight: 400;
  color: #04047d;
  margin-top: 0em;
`

const Answers = styled.div`
  margin: 2em 0em;
  max-width: 500px;
  box-shadow: 0px 0px 4px 1px #ccc;
`

const EachAnswer = styled.div`
  background: white;
  padding: 1em;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  color: #444;
  font-size: 1.15em;
  &.selected{
    background: #01b655;
    border-bottom: none;
    color: white;
  }
`

class QuizScreen extends Component {

  constructor(props){
  	super(props);
  	this.state = {selectedAnswer: null};
  }

  updateAnswer = (answerObj) => {
    this.setState({selectedAnswer: answerObj})
  }

  renderMultipleAnswers = () => {
    const { quizObj } = this.props;
    const { selectedAnswer } = this.state
    return (
      <Answers>
        {
          quizObj.answers.map((answerObj, index) => {
            let className = selectedAnswer && (answerObj.id == selectedAnswer.id)? 'selected': '';
            return (
              <EachAnswer onClick={() => this.updateAnswer(answerObj) } className={className} key={index}>
                {answerObj.value}
              </EachAnswer>
            )
          })
        }
      </Answers>
    )
  }

  render () {
    const { changeQuestion, quizObj, name, saveAnswerAndMove } = this.props
    return (
      <QuestionSection>
        {quizObj.mainHead && <MainHead>{quizObj.mainHead(name)}</MainHead>}
        <EachQuestion>
          <Question>{quizObj.question}</Question>
          {quizObj.isMultiple && this.renderMultipleAnswers()}
          <Button disabled={!this.state.selectedAnswer} type="button" label="Next" onClick={() => saveAnswerAndMove(quizObj, this.state.selectedAnswer)} />
        </EachQuestion>
      </QuestionSection>
    )
  }

}

QuizScreen.propTypes = propTypes
QuizScreen.defaultProps = defaultProps

export default QuizScreen
