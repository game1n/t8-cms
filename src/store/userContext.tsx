import React from 'react';

import { UserDetailsResponseType } from '../models/user.models';

export type ContextProps = {
  userState: UserDetailsResponseType;
  userDispatch: React.Dispatch<any>;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const UserContext = React.createContext({} as ContextProps);

export const useUserContext = (): any => {
  return React.useContext(UserContext);
};

export default UserContext;
