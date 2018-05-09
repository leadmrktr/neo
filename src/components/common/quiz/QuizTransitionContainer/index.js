import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const propTypes = {
  visible: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired
}

const defaultProps = {
  duration: 150
}

const QuizTransitionContainer = (props) => {
  const duration = props.duration
  const defaultStyle = {
    transition: `all ${duration}ms ease-in`,
    opacity: 0,
    height: 'inherit',
    width: 'inherit',
    // position: 'absolute',
    pointerEvents: 'none',
    overflow: 'auto'
  }

  const transitionForward = {
    entering: { opacity: 0, transform: 'translateX(2%)' },
    entered: { opacity: 1, transform: 'translateX(0%)', pointerEvents: 'all' },
    exiting: { opacity: 0, transform: 'translateX(-2%)' },
    exited: { opacity: 0 }
  }

  const transitionBackward = {
    entering: { opacity: 0, transform: 'translateX(-2%)' },
    entered: { opacity: 1, transform: 'translateX(0%)', pointerEvents: 'all' },
    exiting: { opacity: 0, transform: 'translateX(2%)' },
    exited: { opacity: 0 }
  }

  const transitionStyle = props.reverseTransition ? transitionBackward : transitionForward

  return (
    <Transition in={props.visible} timeout={duration} mountOnEnter unmountOnExit>
      {(state) => {
        return (
          <div style={{
            ...defaultStyle,
            ...transitionStyle[state]
          }}>
            {props.children}
          </div>
        )
      }}
    </Transition>
  )
}

QuizTransitionContainer.propTypes = propTypes
QuizTransitionContainer.defaultProps = defaultProps

export default QuizTransitionContainer
