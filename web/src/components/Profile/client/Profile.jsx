import React from 'react'
import styled from "styled-components";
import { AccountBox } from "./accountBox";


const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  box-sizing: border-box;
`;



const Profile = () => {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  )
}
export default Profile