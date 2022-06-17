import React, { FC } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  children: JSX.Element[]
}

const Container: FC<ContainerProps> = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
)

const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

export default Container
