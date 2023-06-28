import styled from 'styled-components'
import {AiFillFire} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
`

export const Ul = styled.ul`
  list-style-type: none;
`
export const Air = styled(AiFillFire)`
  color: red;
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 20px;
`
export const MainDivEle = styled.div`
  display: flex;
`
export const IconDiv = styled.div`
  display: flex;
`

export const TrendImage = styled.img`
  width: 250px;
  height: 120px;
  margin-top: 20px;
`
export const TrendList = styled.li`
  margin: 20px;
`
export const He = styled.h1`
  font-size: 20px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const ParaT = styled.p`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`

export const Hlo = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Widthdiv = styled.div`
  width: 500px;
  margin-left: 20px;
`
export const ParaLeft = styled.p`
  margin-left: 15px;
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
  width: 900px;
  background-color: ${props => (props.theme1 ? 'white' : '#0f0f0f')};
`
export const FailedImg = styled.img`
  width: 400px;
  height: 400px;
`
export const HeaT = styled.h1`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Back = styled.div`
  background-color: ${props => (props.theme1 ? '#f9f9f9' : '#0f0f0f')};
`
export const ParaHome = styled.p`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Hee = styled.h1`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const UnNone = styled.ul`
  display: none;
`
