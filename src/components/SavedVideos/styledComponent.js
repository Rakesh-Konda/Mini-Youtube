import styled from 'styled-components'
import {AiFillFire} from 'react-icons/ai'

export const Icon2 = styled(AiFillFire)`
  margin: 10px;
  margin-top: 12px;
  margin-right: 20px;
  color: red;
`
export const Headd = styled.h1`
  font-size: 20px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`

export const Div = styled.div`
  display: flex;
`
export const Div1 = styled.div`
  background-color: ${props => (props.theme1 ? '#f9f9f9 ' : '#0f0f0f')};
  width: 900px;
`
export const Head = styled.h1`
  font-size: 16px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const List = styled.li`
  margin: 20px;
`
export const Un = styled.ul`
  list-style-type: none;
`
export const Image = styled.img`
  width: 220px;
  height: 120px;
  margin-top: 10px;
  margin-right: 15px;
`
export const DivYear = styled.div`
  display: flex;
`
export const RightPara = styled.p`
  margin-right: 10px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Mid = styled.div`
  display: flex;
`
export const Divv = styled.div`
  background-color: ${props => (props.theme1 ? 'white' : '#0f0f0f')};
`
export const NoVideoImg = styled.img`
  width: 400px;
  height: 400px;
`
export const DivNo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
`
export const HeT = styled.h1`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const PeT = styled.p`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const UnNone = styled.ul`
  display: none;
`
