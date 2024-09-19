import React from 'react'
import styled from 'styled-components'

export const TechOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 100;
  display: flex;

  @media only screen {
    overflow-y:scroll;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 0px;
  }

  @media screen and (min-width: 1281px){
    justify-content: center;
    align-items: center;
  }

`

const TechOverlay = ({children,close}) => {
  return (
    <TechOverlayContainer onClick={close}>{children}</TechOverlayContainer>
  )
}

export default TechOverlay
