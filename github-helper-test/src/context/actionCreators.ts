import { ActionsTypes } from './../types/enums';
import {
  GetUserResponse,
  AddUserInfoActionType,
  GetRepoResponse,
  AddRepoInfoActionType,
} from './../types/types';

export const addUSerInfoAction = (payload: GetUserResponse | null): AddUserInfoActionType => ({
  type: ActionsTypes.ADD_USER_INFO,
  payload: payload,
});

export const addRepoInfoAction = (
  dataIsLoad: boolean,
  repoInfo: GetRepoResponse
): AddRepoInfoActionType => ({
  type: ActionsTypes.ADD_REPO_INFO,
  payload: {
    dataIsLoad: dataIsLoad,
    repoInfo: repoInfo,
  },
});
