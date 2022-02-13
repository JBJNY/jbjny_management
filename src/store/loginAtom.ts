import { atom } from "recoil";

const loginInput = atom({
  key: "loginInput",
  default: { id: "", pw: "" },
});

export default loginInput;
