import { loginStates } from '../enums/login.enums';

export const getLoginLabel = (loginState: loginStates): string =>
  loginState === loginStates.signIn ? 'Login' : 'Sign Up';
