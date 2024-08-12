import { atom } from 'recoil';

const getDefaultVisibility = () => {
  const storedVisibility = localStorage.getItem('formVisibilityState');
  return storedVisibility !== null ? JSON.parse(storedVisibility) : false;
};

export const formVisibilityState = atom({
  key: 'formVisibilityState',
  default: getDefaultVisibility(),
});