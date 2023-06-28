import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${props => (props.theme1 ? 'white' : '#424242')};

  display: flex;
  justify-content: space-between;
`
export const Img = styled.img`
  width: 100px;
  height: 40px;
  margin: 20px;
`
export const Profile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`
export const DivItems = styled.div`
  display: flex;
  margin: 20px;
`
export const But = styled.button`
  background-color: transparent;
  border: 0px solid transparent;
  margin-right: 20px;
`
export const But1 = styled.button`
  background-color: transparent;
  border: 0px solid transparent;
  margin-right: 20px;
  color: white;
`

export const LogoutButton = styled.button`
  color: ${props => (props.theme1 ? 'blue' : 'white')};
  border: ${props => (props.theme1 ? '1px solid blue' : '1px solid white')};
  background-color: transparent;
  height: 30px;
  width: 60px;
`
export const LogoBut = styled.button`
  background-color: transparent;
  border: 0px solid transparent;
`
export const DivColor = styled.div`
  background-color: white;
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
`
export const ButtonConfirm = styled.button`
  color: white;
  background-color: blue;
  border: 0px solid transparent;
  margin: 10px;
  margin-left: 20px;
`
export const CancelBut = styled.button`
  color: blue;
  background: transparent;
  border: 1px solid blue;
  margin: 10px;
  margin-right: 20px;
`
export const ButtonDivs = styled.div`
  display: flex;
  justify-content: space-between;
`
