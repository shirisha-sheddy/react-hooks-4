// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #fff;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  color: #1e293b;
  font-size: 35px;
  font-weight: bold;
`

export const Para = styled.p`
  color: #334155;
  font-size: 15px;
  font-weight: 500;
`

export const Image = styled.img`
  height: 275px;
  width: 400px;
  margin-bottom: 15px;
`

export const Description = styled.p`
  color: #334155;
  font-size: 13px;
`

export const Button = styled.button`
  background-color: #1f81ff;
  color: #fff;
  font-size: 12px;
  border-radius: 8px;
  border-width: 0;
  padding: 10px;
  margin-bottom: 15px;
`
