import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Quiz from '../Quiz'

const propTypes = {}

class BossQuiz extends Component {
  render () {
    return(
      <Quiz type={2} />
    );
  }
}

BossQuiz.propTypes = propTypes

export default BossQuiz;
