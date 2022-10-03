import { loginStates } from '../enums/login.enums';

export type LoginFormState = {
  email: string;
  password: string;
  loginState: loginStates;
};

export type LoginFormProps = {
  onButtonClick: (loginFormState: LoginFormState) => void;
};
