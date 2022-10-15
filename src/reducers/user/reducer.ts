import { UPDATE_USER_DETAILS } from './action';
import { UserDetailsResponseType } from '../../models/user.models';
import { userDetailsInitialState } from '../../constants/user.constants';
const UserReducer = (
  state: UserDetailsResponseType = userDetailsInitialState,
  action: any
): any => {
  switch (action.type) {
    case UPDATE_USER_DETAILS: {
      return {
        ...state,
        fullName: action.payload[0]?.fullName,
        createdAt: action.payload[0]?.createdAt,
        id: action.payload[0]?.id,
        phone: action.payload[0]?.phone,
      };
    }
  }
};
export default UserReducer;
