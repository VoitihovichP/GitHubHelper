import { ActionsTypes } from './../types/enums';
import { GetUserResponse, AddUserInfoActionType } from './../types/types';

export const addUSerInfoAction = (
  dataIsLoad: boolean,
  userInfo: GetUserResponse | null
): AddUserInfoActionType => ({
  type: ActionsTypes.ADD_USER_INFO,
  payload: {
    dataIsLoad: dataIsLoad,
    userInfo: userInfo,
  },
});
