import axios from 'axios'
import { CLEAR_ERRORS, DETAIL_USER_FAIL, DETAIL_USER_REQUEST, DETAIL_USER_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_SUCCESS} from '../constants/userConstants'


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS});
  };