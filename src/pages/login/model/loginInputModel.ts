import loginInput from "@Store/loginAtom";
import { useRecoilState } from "recoil";

export function loginInputModal() {
  const [input, setInput] = useRecoilState(loginInput);

  const inputState = {
    id: {
      placeholder: "아이디",
      type: "id",
      val: input.id,
    },
    pw: {
      placeholder: "비밀번호",
      type: "password",
      val: input.pw,
    },
  };

  return { inputState, setInput, input };
}
