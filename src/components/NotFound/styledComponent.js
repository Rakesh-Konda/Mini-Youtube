import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
`
export const Image = styled.img`
  width: 400px;
  height: 400px;
  margin-left: 200px;
  margin-top: 50px;
`
export const DivBottom = styled.div`
  width: 900px;
  background-color: ${props => (props.theme1 ? 'white' : 'black')};
`
export const Para = styled.p`
  margin-left: 200px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Hh = styled.h1`
  margin-left: 200px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
