import React, { useContext } from "react";
import {useState} from "react";
import axiosInstance from "../../../axios";
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from './../../../../AuthContext.js';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const navigate = useNavigate();
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [errorMessage, changeErrorMessage] = useState('');
  const {user, updateUser} = useAuthContext()
  
console.log(user)
  const submitChange =  (e) => {
    console.log(email, password,e );
    e.preventDefault();
    axiosInstance
      .post('login', { email, password})
      .then((response) => {
        console.log(response.data.payload.user);
        updateUser(response.data.payload?.user)
      })
      .catch((error) => {
        console.log(error)
        changeErrorMessage('email or password is not correct', error);
      });
    }
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input  name="email"
          placeholder="Email"
          id="email"
          onChange={(e) => changeEmail(e.target.value)} />
        <Input type="password"
          name="password"
          placeholder="Password"
          id="pwd"
          onChange={(e) => changePassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="button"
          value="Login"
          id="login"
          onClick={submitChange} >Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <h1>{errorMessage}</h1>
      <p href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </p>
    </BoxContainer>
  );
}
