import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
`

export const DivRig = styled.div`
  display: flex;
`
export const Icon = styled(SiYoutubegaming)`
  margin: 10px;
  margin-top: 26px;
  margin-right: 20px;
  margin-left: 26px;
  color: red;
`
export const DivIco = styled.div`
  display: flex;
  margin-left: 30px;
`
export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const Li = styled.li`
  margin: 20px;
`
export const GameImg = styled.img`
  width: 140px;
  height: 200px;
`
export const PadDiv = styled.div`
  padding: 20px;
`
export const Head = styled.h1`
  font-size: 12px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Para = styled.p`
  font-size: 12px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`

export const RetryBut = styled.button`
  color: white;
  background-color: blue;
  border: 0px solid transparent;
  border-radius: 10px;
  width: 80px;
  height: 30px;
  margin-bottom: 10px;
`
export const DivFail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  background-color: ${props => (props.theme1 ? 'white' : 'black')};
  width: 900px;
`
export const FailedImg = styled.img`
  width: 400px;
  height: 400px;
`
export const Hea = styled.h1`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Pt = styled.p`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`

export const DivBa = styled.div`
  background-color: ${props => (props.theme1 ? '#f9f9f9 ' : '#0f0f0f')};
`
export const UnNone = styled.ul`
  display: none;
`
