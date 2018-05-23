import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { neoConstants } from 'helpers'
import { Button, QuizTransitionContainer } from 'components'

const { QUIZ_OUTCOMES } = neoConstants

const propTypes = {}
const defaultProps = {}

const QuizSubmissionSection = styled.div`

`

const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  min-height: calc(100vh - 60px);
  justify-content: center;
  width: 90%;
  button{
    margin-top: 2em;
  }
`

const Question = styled.div`

`

const Heading = styled.h1`
  font-size: 2em;
  font-weight: 400;
  color: #04047d;
  margin-bottom: 0em;
`

const SubHead = styled.span`
  color: #999;
  font-size: .9em;

`

const Answer = styled.input`
  margin: 1em 0em;
  padding: .5em;
  border: none;
  border-bottom: 2px solid #4787ed;
  margin-bottom: 0em;
  outline: none;
  font-size: 2em;
`

const EmailError = styled.p`
  margin-top: 3px;
  color: #d50505;
  font-size: .85em;
`

const ResultContainer = styled.div`
  margin: auto;
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    text-align: center;
  }
`

const ResultSection = styled.div`
  width: 90%;
  max-width: 750px;
  max-height: 85vh;
  height: 100%;
  box-shadow: 0px 0px 4px 1px #ddd;
  padding: 2em;
  width: 90%;
`

const Result = styled.p`
  font-size: 1.2em;
  color: #032e87;
`

const MoreResultsContainer = styled.ul`

`

const EachResult = styled.li`

`


class QuizSubmission extends Component {

  constructor(props){
  	super(props);
    this.emailRegx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  	this.state = {
      currentScreen: 1,
      email: '',
      emailError: ''
    };
  }

  validateEmail = (email) => {
    if (this.emailRegx.test(email)) {
      this.props.saveUserDetails(email, ()=>{this.changeScreen(2)})
      return;
    }
    this.setState({emailError: 'Please enter a valid email'})
  }

  changeScreen = (screen) => {
    this.setState({currentScreen: screen})
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value})
    if ((this.state.emailError.length > 0) && this.emailRegx.test(e.target.value)){
      this.setState({emailError: ''})
    }
  }

  calculateOutcomeFromAnswerList = (answers) => {
    let answersArray = Object.keys(answers).map((value) => {
      return answers[value];
    }).filter((answer) => {
      return answer && answer.outcome
    })
    let total = 0
    answersArray.forEach((answer) => {
      total += answer.outcome
    })
    return Math.round((total/answersArray.length), 0)
  }

  renderEmailScreen () {
    return (
      <EmailInputContainer>
        <Question>
          <Heading>Tell us your Email ID</Heading>
          <SubHead>(We will send the result to this email ID)</SubHead>
        </Question>
        <Answer value={this.state.email} onChange={this.handleEmail} type="email" placeholder="eg: abc@xyz.com" />
        <EmailError>{this.state.emailError}</EmailError>
        <Button disabled={this.state.email.length < 3} label="See the result" onClick={() => this.validateEmail(this.state.email)} />
      </EmailInputContainer>
    )
  }

  renderMoreResults (resultMap) {
    return (
      <MoreResultsContainer>
        {
          resultMap.details.map((result, index) => {
            return (
              <EachResult key={index}>
                {result}
              </EachResult>
            )
          })
        }
      </MoreResultsContainer>
    )
  }

  renderResultScreen () {
    const { selectedAnswers } = this.props;
    const outcome = this.calculateOutcomeFromAnswerList(selectedAnswers)
    const resultMap = QUIZ_OUTCOMES[outcome];
    return (
      <ResultContainer>
        <ResultSection>
          <Heading>Your result</Heading>
          <Result>{resultMap.score}</Result>
          {this.renderMoreResults(resultMap)}
        </ResultSection>
      </ResultContainer>
    );
  }

  render () {
    return (
      <QuizSubmissionSection>
        <QuizTransitionContainer visible={this.state.currentScreen == 1}>
          {this.renderEmailScreen()}
        </QuizTransitionContainer>
        <QuizTransitionContainer visible={this.state.currentScreen == 2}>
          {this.renderResultScreen()}
        </QuizTransitionContainer>
      </QuizSubmissionSection>
    )
  }

}

QuizSubmission.propTypes = propTypes
QuizSubmission.defaultProps = defaultProps

export default QuizSubmission
