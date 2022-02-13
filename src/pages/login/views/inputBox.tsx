import React from "react";
import styled from "styled-components";
import { InputController } from "../controllers/inputController";
import { loginInputModal } from "../model/loginInputModel";

function InputBox() {
  const { inputState } = loginInputModal();
  const { saveInputVal } = InputController();
  const inputStateArr = Object.entries(inputState);

  return (
    <>
      {inputStateArr.map(([key, value]) => (
        <Input
          key={key}
          placeholder={value.placeholder}
          type={value.type}
          defaultValue={value.val}
          onChange={(e) => saveInputVal(value.type, e.target.value)}
        />
      ))}
    </>
  );
}

export default InputBox;

const Input = styled.input`
  width: 100%;
  min-width: 400px;
  max-width: 520px;
  border: 1px solid #a6a39f;
  border-radius: 25px;
  height: 40px;
  padding: 0 15px;
  font-size: 16px;
  margin-bottom: 20px;
  &:focus-visible {
    transition: all 2s;
  }
`;
