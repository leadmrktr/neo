import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { neoConstants } from 'helpers'
import { Button, QuizTransitionContainer } from 'components'
import { GlobalImages } from 'assets'

const { QUIZ_OUTCOMES, BOSS_QUIZ_OUTCOMES } = neoConstants

const propTypes = {}
const defaultProps = {}

const QuizSubmissionSection = styled.div`

`

const EmailInputContainer = styled.form`
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
  color: var(--dark-blue);
  font-size: 1.12em;
  font-family: avenir-heavy;
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
  h1{
    text-align: center;
  }
`

const ResultSection = styled.div`
  width: 90%;
  max-width: 750px;
  margin: 2em auto;
  height: 100%;
  box-shadow: 0px 0px 4px 1px #ddd;
  padding: 2em;
  width: 90%;
  a{
    display: block;
    margin: .5em 0em;
  }
  p, ul{
    font-weight: 300;
    color: #444;
  }
`

const Result = styled.p`
  font-size: 1.25em;
  color: var(--button-blue);
  font-family: avenir-heavy
`

const MoreResultsContainer = styled.ul`

`

const EachResult = styled.li`

`

const Image = styled.img`
  max-width: 500px;
  margin: auto;
  display: block;
  width: 90%;
`

const ShareSection = styled.div`
  text-align: center;
  img{
    width: 40px;
    margin: 0.5em .5em 2em;
    border-radius: 50%;
    cursor: pointer;
  }
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

  validateEmail = (e) => {
    e.preventDefault()
    const { email } = this.state
    if (this.emailRegx.test(email)) {
      // this.props.saveUserDetails(email, ()=>{this.changeScreen(2)})
      // cheange this to the above one later
      this.props.saveUserDetails(email, ()=>{})
      this.changeScreen(2)
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

  shareFBtoAll = () => {
    const { type } = this.props;
    let url = 'https://kommunicate.leadmrktr.com/'
    switch (type) {
      case 1:
        url = 'https://kommunicate.leadmrktr.com/how-good-is-your-support'
        break;
      case 2:
        url = 'https://kommunicate.leadmrktr.com/what-type-of-boss-are-you'
        break;
      default:
        url = 'https://kommunicate.leadmrktr.com/'
        break
    }
    FB.ui({
      method: 'share',
      display: 'popup',
      href: `${url}`
    }, response => {
      if (response && !response.error_message) {
        console.log('Posting completed.')
      } else {
        console.log('Error while posting.')
      }
    })
  }

  shareTw = () => {
    const { type } = this.props;
    let url = 'https://kommunicate.leadmrktr.com/'
    switch (type) {
      case 1:
        url = 'https://kommunicate.leadmrktr.com/how-good-is-your-support'
        break;
      case 2:
        url = 'https://kommunicate.leadmrktr.com/what-type-of-boss-are-you'
        break;
      default:
        url = 'https://kommunicate.leadmrktr.com/'
        break
    }
    window.open(`https://twitter.com/intent/tweet?${url}&original_referer=https://kommunicate.leadmrktr.com/&text=What type of boss are you? Are you a tyrant evil dragon or are the boss baby? ${url}`)
  }

  shareLinkin = () => {
    const { type } = this.props;
    let url = 'https://kommunicate.leadmrktr.com/'
    switch (type) {
      case 1:
        url = 'https://kommunicate.leadmrktr.com/how-good-is-your-support'
        break;
      case 2:
        url = 'https://kommunicate.leadmrktr.com/what-type-of-boss-are-you'
        break;
      default:
        url = 'https://kommunicate.leadmrktr.com/'
        break
    }
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=kommunicate-Leadmrktr`)
  }

  renderEmailScreen () {
    return (
      <EmailInputContainer onSubmit={this.validateEmail}>
        <Question>
          <Heading>Tell us your Email ID</Heading>
          <SubHead>(We will send the result to this email ID)</SubHead>
        </Question>
        <Answer value={this.state.email} onChange={this.handleEmail} type="email" placeholder="eg: abc@xyz.com" />
        <EmailError>{this.state.emailError}</EmailError>
        <Button disabled={this.state.email.length < 3} label="See the result" type="submit" />
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

  renderResult (outcome) {
    switch (outcome) {
      case 1:
        return (
          <ResultSection>
            <Result>You are AWESOME!</Result>
            <p>Don’t change a thing! stick to whatever you are doing and you would achieve Nirvana :)</p>
            <p>Though you should consider some technological advances in your industry, if you aren’t already!</p>
            <SubHead>Things that might help</SubHead>
            <a href="https://blog.kommunicate.io/how-to-improve-customer-support-8a3b5851c990" rel="noopener" target="_blank">Automations in Support Industry</a>
          </ResultSection>
        )
        break;
      case 2:
        return (
          <ResultSection>
            <Result>Average</Result>
            <p>There are slight delays that are affecting customer service. Most probable causes are listed below</p>
            <ul>
              <li>Too many tickets are coming your team’s way</li>
              <li>Extended dependency on third party (tech teams etc) are causing delays in response</li>
              <li>Customers do not understand your product and questions are popping up because of it</li>
            </ul>
            <SubHead>Things to Improve</SubHead>
            <ul>
              <li>Response Times</li>
              <li>Resolution time</li>
              <li>Documentation and FAQ’s</li>
            </ul>
            <SubHead>How?</SubHead>
            <p>One of the major reasons of delay in response has been dependencies on other teams or your support team is overwhelmed with the amount of tickets.</p>
            <p>Ideally a support agent can handle a max of 150 support tickets a month, wherein there is an issue and a conversation with the customer. This is in addition to all the generic tickets that come in. </p>
            <p>If your agent is handling more than that, they are not being efficient!</p>
            <p>One way to counter this would be to automating customer support, our article on automation might be of help to you.</p>
            <a href="https://blog.kommunicate.io/how-to-improve-customer-support-8a3b5851c990" rel="noopener" target="_blank">Improve customer support via Automation</a>
          </ResultSection>
        )
        break;
      case 3:
        return (
          <ResultSection>
            <Result>Poor</Result>
            <p>Your customers aren’t happy.</p>
            <p>Either you don’t have a customer support team or the team that you do have is overwhelmed or are a bunch of part-timers</p>
            <p>You might have to look into your documentation and other customer support resources including your team to make sure your customers can help themselves as much as possible.</p>
            <SubHead>Some of the reasons for a poor performance can be</SubHead>
            <ul>
              <li>Customer do not understand your system at all, leading to trivial queries like password reset being sent as tickets</li>
              <li>You either don’t have a support team or have a team which is not used to handling customer queries. Refer this article to understand hiring</li>
              <li>On top of having too many queries, your team is left doing repetitive tasks. Try automating, this should help decrease ticket by at least 25%</li>
              <li>Your product is failing, there are downtimes all the time and customer businesses are being affected</li>
            </ul>
            <p>According to ORACLE survey customers wait 48 hours for an answer, before deciding to find an alternative. </p>
            <SubHead>Things to Improve</SubHead>
            <ul>
              <li>Improve your product </li>
              <li>Build Full proof documentation and Knowledge base site</li>
              <li>Hire more and better team members</li>
              <li>Automate support as much as possible.</li>
              <li>Minimize the load on Customer support</li>
            </ul>
            <SubHead>How?</SubHead>
            <p>Following essays talk about things that you can do to improve customer experience</p>
            <a href="https://blog.kommunicate.io/how-to-improve-customer-support-8a3b5851c990" rel="noopener" target="_blank">Improving Customer support Via Automation</a>
            <a href="https://blog.kommunicate.io/how-to-hire-for-customer-support-service-8a0b7251d9ea" rel="noopener" target="_blank">Hiring for Customer facing roles</a>
            <a href="https://blog.kommunicate.io/aligning-sales-marketing-and-support-for-revenue-growth-4aeedd7057ee" rel="noopener" target="_blank">Minimizing the load on Customer support by aligning customer facing teams</a>
          </ResultSection>
        )
    }
  }

  renderBossResult = (resultMap) => {
    return (
      <ResultSection>
        <Result>{resultMap.head}</Result>
        <Image src={resultMap.image}/>
        {this.renderMoreResults(resultMap)}
      </ResultSection>
    )
  }

  renderResultScreen () {
    const { selectedAnswers, type } = this.props;
    const outcome = this.calculateOutcomeFromAnswerList(selectedAnswers)
    const resultMap = type !== 2? QUIZ_OUTCOMES[outcome]: BOSS_QUIZ_OUTCOMES[outcome];
    return (
      <ResultContainer>
        <Heading>Your result</Heading>
          {type !== 2 && this.renderResult(outcome)}
          {type === 2 && this.renderBossResult(resultMap)}
          {/* {this.renderMoreResults(resultMap)} */}
          <ShareSection>
            <img src={GlobalImages.fbLogo} alt="" onClick={this.shareFBtoAll} />
            <img src={GlobalImages.twitterLogo} alt="" onClick={this.shareTw} />
            <img src={GlobalImages.linkedinLogo} alt="" onClick={this.shareLinkin} />
          </ShareSection>
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
