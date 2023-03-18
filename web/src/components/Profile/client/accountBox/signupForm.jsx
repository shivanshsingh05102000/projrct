import React, { useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
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


export function SignupForm(props) {
  const navigate = useNavigate();
  const [name,changeName]=useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [errorMessage, changeErrorMessage] = useState('');
  const {user, updateUser} = useAuthContext();
  

  const submitChange =  (e) => {
    console.log(email, password, name,e );
    e.preventDefault();
    axiosInstance
      .post('register', { email, password, name })
      .then((response) => {
        console.log(response)
        updateUser(response.data.payload.user)
        navigate('/');
        console.log(JSON.stringify(response));
      })
      .catch((error) => {
        console.log(error)
        changeErrorMessage('email or password is not correct', error);
      });
  };
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="name"
          value={name}
          placeholder="Name"
          onChange={(e) => changeName(e.target.value)} />
        <Input type="email"
          name="email"
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
      <SubmitButton type="button"
          value="Login"
          id="login"
          onClick={submitChange}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <span>
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </span>
    </BoxContainer>
  );
}
