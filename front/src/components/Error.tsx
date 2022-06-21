import React from 'react'
import styled from 'styled-components'

const Error = () => <ErrorStyled>Error :(</ErrorStyled>

const ErrorStyled = styled.p`
  border: 1px solid rgb(95, 33, 32);
  padding: 8px 16px;
  text-align: center;
  color: rgb(95, 33, 32);
  background: rgb(253, 237, 237);
  border-radius: 5px;
  margin: auto 0;
`

export default Error
