import { ActionsTypes } from '../types/enums';
import { GlobalState, ReducerActionsTypes } from './../types/types';
import { initialState } from './context';

const reducer = (state = initialState, action: ReducerActionsTypes): GlobalState => {
  const { type, payload } = action;

  switch (type) {
    case ActionsTypes.ADD_USER_INFO:
      return { ...state, userInfo: payload };
    default:
      return state;
  }
};

export default reducer;
