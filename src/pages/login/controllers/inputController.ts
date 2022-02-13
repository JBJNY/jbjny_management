import { loginInputModal } from "../model/loginInputModel";

export function InputController() {
  const { setInput } = loginInputModal();

  function saveInputVal(type: string, val: string) {
    setInput((prevState) => ({ ...prevState, [type]: val }));
  }

  return { saveInputVal };
}
