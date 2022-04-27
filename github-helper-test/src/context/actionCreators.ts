import { ActionsTypes } from './../types/enums';
import { GetUserResponse, AddUserInfoActionType } from './../types/types';

export const addUSerInfoAction = (payload: GetUserResponse | null): AddUserInfoActionType => ({
  type: ActionsTypes.ADD_USER_INFO,
  payload: payload,
});
