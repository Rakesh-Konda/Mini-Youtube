import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItemHome = styled(Link)`
  text-decoration: none;
  color: black;
`

export const RightDiv = styled.div`
  width: 900px;
`
export const BackgroundImageDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 160px;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  //   background-color: black;
`
export const Img1 = styled.img`
  width: 100px;
  height: 40px;
  margin: 10px;
`
export const Para = styled.p`
  margin: 10px;
  margin-left: 10px;
`
export const Button = styled.button`
  background-color: transparent;
  color: #1e293b;
  border: 1px solid #1e293b;
  margin: 10px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 0px solid transparent;
`
export const BelowDiv = styled.div`
  background-color: ${props => (props.theme1 ? '#f9f9f9' : '#181818')};
  width: 1100px;
  border: 0px solid transparent;
`
export const SearchInput = styled.input`
  width: 250px;
  height: 25px;
  margin-top: 15px;
  margin-left: 15px;
  background-color: transparent;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const DivInp = styled.div`
  display: flex;
  width: 1100px;
  background-color: ${props => (props.theme1 ? '#f8fafc' : 'black')};
`
export const SearchBut = styled.button`
  margin-left: 0px;
  height: 25px;
  width: 50px;
  margin-top: 15px;
  background-color: ${props => (props.theme1 ? 'none' : '#7e858e')};
`
export const UnorderList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const VideoImg = styled.img`
  width: 240px;
  height: 125px;
`
export const List = styled.li`
  margin: 15px;
`
export const ChannelImg = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
`
export const DivChannelUrl = styled.div`
  width: 220px;
  display: flex;
`
export const DivYear = styled.div`
  display: flex;
  justify-content: space-between;
`
export const FailedImg = styled.img`
  width: 400px;
  height: 400px;
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
`
export const Back = styled.div`
  background-color: ${props => (props.theme1 ? 'white' : 'black')};
`

export const DivMain = styled.div`
  display: flex;
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
