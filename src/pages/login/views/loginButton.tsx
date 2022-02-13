import React from "react";
import styled from "styled-components";

function LoginButton() {
  return (
    <Button type="button">
      <Span>로그인</Span>
    </Button>
  );
}

export default LoginButton;

const Button = styled.button`
  width: 100%;
  min-width: 400px;
  max-width: 520px;
  border-radius: 25px;
  height: 40px;
  padding: 0 15px;
  margin-top: 20px;
  cursor: pointer;
  background-color: #334b44;
  border: none;
  transition: all 0.35s;
  position: relative;
  opacity: 1;
  overflow: hidden;
  ::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    opacity: 0.6;
    background-color: #334b44;
    transition: all 0.35s;
    border-radius: 25px;
  }
  &:hover::after {
    width: 100%;
    border-radius: 25px;
    background-color: #fff;
  }
`;

const Span = styled.span`
  color: #fff;
  font-size: 16px;
  font-family: "NanumGothicBold";
`;
