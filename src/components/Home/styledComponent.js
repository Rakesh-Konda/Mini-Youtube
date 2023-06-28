import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BsBookmarkCheck} from 'react-icons/bs'

export const DivLeft = styled.div`
  //   box-shadow: 0 0 5px 5px rgba(200, 200, 200, 0.5);
  background-color: ${props => (props.theme1 ? 'white' : '#424242')};
  box-shadow: ${props =>
    props.theme1
      ? 'rgba(200, 200, 200, 0.5)'
      : '0 0 5px 5px rgba(200, 200, 200, 0.5)'};
  width: 200px;
  height: 100vh;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
`

export const IconsDiv = styled.div`
  display: flex;
  margin: 10px;
  text-decoration: none;
`
export const Icon1 = styled(AiFillHome)`
  margin: 10px;
  margin-top: 12px;
  margin-right: 20px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Par = styled.p`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Icon2 = styled(AiFillFire)`
  margin: 10px;
  margin-top: 12px;
  margin-right: 20px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Icon3 = styled(SiYoutubegaming)`
  margin: 10px;
  margin-top: 12px;
  margin-right: 20px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Icon4 = styled(BsBookmarkCheck)`
  margin: 10px;
  margin-top: 12px;
  margin-right: 20px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Div = styled.div`
  display: flex;
`

export const Par1 = styled.p`
  font-size: 22px;
  text-align: center;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const DivImages = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Image = styled.img`
  width: 40px;
  height: 40px;
`
export const ParaBelow = styled.p`
  text-align: center;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
