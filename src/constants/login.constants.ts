import { loginStates } from '../enums/login.enums';
import { LoginFormState } from '../models/login.models';

export const initialLoginFormState: LoginFormState = {
  email: '',
  password: '',
  loginState: loginStates.signIn,
};
