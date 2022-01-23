import React from "react";
import styled from "styled-components";
import InputBox from "./views/inputBox";
import LoginButton from "./views/loginButton";

function Login() {
  return (
    <Wrapper>
      <InputBox />
      <LoginButton />
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  margin: auto;
  width: 25%;
  background-color: #fcf1ef;
  padding: 30px;
  border-radius: 30px;
`;
