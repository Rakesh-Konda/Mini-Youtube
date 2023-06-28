import styled from 'styled-components'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

export const Div = styled.div`
  display: flex;
  margin-top: 10px;
`
export const DivVideo = styled.div`
  margin-left: 50px;
  margin-top: 10px;
  width: 900px;
  background-color: ${props => (props.theme1 ? '#f9f9f9 ' : '#0f0f0f')};
`
export const Head = styled.h1`
  font-size: 15px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Pat = styled.p`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`

export const Para = styled.p`
  margin-left: 20px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Paa = styled.p`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`

export const Like = styled(BiLike)`
  margin: 10px;
  margin-top: 15px;
  color: ${props => (props.likeColor ? '#64748b' : '#2563eb')};
`
export const Like1 = styled(BiLike)`
  margin: 10px;
  margin-top: 15px;
  color: ${props => (props.likeColor ? 'white' : '#2563eb')};
`

export const Save = styled(MdPlaylistAdd)`
  margin: 10px;
`

export const LL = styled.div`
  display: flex;
  margin-right: 160px;
`
export const DivSide = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ParaSave = styled.p`
  margin-bottom: 10px;
`
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin: 15px;
`
export const DivSub = styled.div`
  display: flex;
  margin-left: 10px;
`
export const ParaLast = styled.p`
  margin: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  color: ${props => (props.theme1 ? 'black' : 'white')};
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
  background-color: ${props => (props.theme1 ? 'white' : 'black')};
  width: 900px;
`
export const But = styled.button`
  background-color: transparent;
  border: 0px solid transparent;
`
export const ButPara = styled.p`
  margin-top: 20px;
  color: ${props => (props.likeColor ? '#64748b' : '#2563eb')};
`
export const ButPara1 = styled.p`
  margin-top: 20px;
  color: ${props => (props.likeColor ? 'white' : '#2563eb')};
`

const getColor = (saveColor, theme1) => {
  if (saveColor) {
    return theme1 ? 'black' : 'white'
  }
  return saveColor ? '#64748b' : '#2563eb'
}

export const DivLikSave = styled.div`
  display: flex;
  margin-right: 10px;
  color: ${props => getColor(props.saveColor, props.theme1)};
`

export const DivLike = styled.div`
  display: flex;
  margin-right: 10px;
`

export const ParaHome = styled.p`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const Hee = styled.h1`
  color: ${props => (props.theme1 ? 'black' : 'white')};
`
export const DivDisLike = styled.div`
  display: flex;
  margin-right: 10px;
`
export const DisLike = styled(BiDislike)`
  margin: 10px;
  margin-top: 15px;
  color: ${props => (props.dislikeColor ? 'black' : '#2563eb')};
`
export const DisLike1 = styled(BiDislike)`
  margin: 10px;
  margin-top: 15px;
  color: ${props => (props.dislikeColor ? 'white' : '#2563eb')};
`
export const ButPara2 = styled.p`
  margin-top: 20px;
  color: ${props => (props.dislikeColor ? 'white' : '#2563eb')};
`
export const ButPara3 = styled.p`
  margin-top: 20px;
  color: ${props => (props.dislikeColor ? '#64748b' : '#2563eb')};
`
