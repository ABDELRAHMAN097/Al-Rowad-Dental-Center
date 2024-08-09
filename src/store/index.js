import { atom } from "recoil";

const localData = JSON.parse(localStorage.getItem('loginUser'));
const defaultAuthData = {
  isAuth: false,
  user: null,
  role: null
};

if (localData && localData.role) {
  defaultAuthData.role = localData.role;
}

const $AuthData = atom({
  key: "$AuthData",
  default: localData || defaultAuthData,
});

export default $AuthData;
