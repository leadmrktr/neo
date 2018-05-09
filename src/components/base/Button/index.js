import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}
const defaultProps = {}

const ButtonContainer = styled.button`
  color: var(--white);
  background: var(--button-blue);
  padding: 1em;
  width: 10em;
  font-size: 1em;
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`

const Button = (props) => {
  return (
    <ButtonContainer onClick={props.onClick} {...props}>{props.label}</ButtonContainer>
  )
}

export default Button;
