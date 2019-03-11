import styled, { keyframes } from 'styled-components'

const pageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.1 1 700px;
  justify-content: space-around;
  align-items: center;
  position: relative;
  overflow: hidden;
  min-height: 300px;

  padding: 20px;
  margin: 20px;
  border-radius: 3px;
  box-shadow: 0 4px 8px #00000033;
  background-color: #fff;

  animation: ${pageIn} 1s ease;
`

export const FooterWrapper = styled.footer`
  position: absolute;
  margin: 10px;
  right: 0px;
  bottom: 0px;
  color: #5f5f5f;
`
