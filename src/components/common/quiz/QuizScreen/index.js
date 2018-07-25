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
  min-height: calc(100vh - 60px);
  justify-content: center;
  width: 90%;
  padding-top: 60px;
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

const ButtonWarning = styled.p`
  display: block;
  margin: 1em 0em;
  color: #bd1b1b;
  font-size: .9em;
`

class QuizScreen extends Component {

  constructor(props){
  	super(props);
  	this.state = {selectedAnswer: null};
  }

  updateAnswer = (answerObj) => {
    const { quizObj, saveAnswerAndMove } = this.props;
    this.setState({selectedAnswer: answerObj})
    saveAnswerAndMove(quizObj, answerObj)
  }

  renderMultipleAnswers = () => {
    const { quizObj, selectedAnswers } = this.props;
    const { selectedAnswer } = this.state
    return (
      <Answers>
        {
          quizObj.answers.map((answerObj, index) => {
            let className = selectedAnswer && (answerObj.id == selectedAnswer.id)? 'selected': '';
            if (selectedAnswers[quizObj.current] && selectedAnswers[quizObj.current].id == answerObj.id)
              className = 'selected'
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
    const { changeQuestion, quizObj, name, forceMoveToResult, isNotAllAnswered } = this.props
    return (
      <QuestionSection>
        {quizObj.mainHead && <MainHead>{quizObj.mainHead(name)}</MainHead>}
        <EachQuestion>
          <Question>{quizObj.question}</Question>
          {quizObj.isMultiple && this.renderMultipleAnswers()}
          {isNotAllAnswered && <ButtonWarning>You haven't answered all the question. Click on the button will skip all the unanswered questions</ButtonWarning>}
          {isNotAllAnswered && <Button type="button" label="Show result" onClick={forceMoveToResult} />}
        </EachQuestion>
      </QuestionSection>
    )
  }

}

QuizScreen.propTypes = propTypes
QuizScreen.defaultProps = defaultProps

export default QuizScreen
