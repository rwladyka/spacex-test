import React from 'react'

import styled from 'styled-components'

const Loading = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <LoadingStyled data-testid="rw-loading-test-id">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingStyled>
    </div>
  )
}

const LoadingStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  margin: auto;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 48px;
    height: 48px;
    margin: 2px;
    border: 2px solid #333;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #333 transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loading
