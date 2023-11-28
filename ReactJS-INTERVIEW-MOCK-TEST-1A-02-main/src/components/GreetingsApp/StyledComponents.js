import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  jestify-content: center;
  padding: 25px;
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 600;
`

export const TabsList = styled.ul`
  display: flex;
  align-items: center;
  jestify-content: center;
  padding: 0;
`

export const Tab = styled.li`
  list-style: none;
  margin: 25px;
`

export const Button = styled.button`
  padding: 12px 24px;
  background-color: ${props => (!props.isActive ? 'transparent' : '#db1c48')};
  border-radius: 25px;
  color: ${props => (!props.isActive ? '#db1c48' : '#ffffff')};
  border: 1px solid red;
  cursor: pointer;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
`

export const Image = styled.img`
  width: 250px;
  margin: auto;
`
