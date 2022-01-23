import loginInput from "@Store/loginAtom";
import { useRecoilState } from "recoil";

function InputController() {
  const [input, setInput] = useRecoilState(loginInput);

  function saveInputVal(type: string, val: string) {
    setInput((prevState) => ({ ...prevState, [type]: val }));
  }

  const inputState = {
    id: {
      placeholder: "아이디",
      type: "text",
      val: input.id,
    },
    pw: {
      placeholder: "비밀번호",
      type: "password",
      val: input.pw,
    },
  };

  return { inputState, saveInputVal };
}

export default InputController;
