import React, { FC } from 'react'
import styled from 'styled-components'

interface BoxStyledProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  padding?: string
}

interface BoxProps extends BoxStyledProps {
  children: React.ReactNode
}

const Box: FC<BoxProps> = ({
  children,
  direction = 'row',
  padding = '8px',
}) => (
  <BoxStyled direction={direction} padding={padding}>
    {children}
  </BoxStyled>
)

const BoxStyled = styled.div<BoxStyledProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  padding: ${({ padding }) => padding};
`

export default Box
