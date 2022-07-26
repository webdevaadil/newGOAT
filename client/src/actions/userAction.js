import axios from "axios";
import {
  CLEAR_ERRORS,
  DETAIL_USER_FAIL,
  DETAIL_USER_REQUEST,
  DETAIL_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch, getState) => {
  console.log(email, password);
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(`/api/auth/login`, { email, password });

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    console.log(data);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data });

    console.log(error.response);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "Application/json" } };

    const { data } = await axios.post(`/api/auth/register`, userData, config);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    console.log(data);
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data,
    });
    console.log(error);
  }
};
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/auth/logout`);

    dispatch({ type: LOGOUT_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message });
  }
};

export const loaduser = () => async (dispatch) => {
  try {
    dispatch({ type: DETAIL_USER_REQUEST });
    const { data } = await axios.get(`/api/auth/me`);

    dispatch({ type: DETAIL_USER_SUCCESS, payload: data.user });

    console.log(data.user);
  } catch (error) {
    dispatch({ type: DETAIL_USER_FAIL});

  }
};

// export const loaduser = () =>async(dispatch)=>{

// try{
//     dispatch({type:DETAIL_USER_REQUEST})
//     const {data}  = await axios.get(
//         `/api/auth/me`,
//         );

// dispatch({type:DETAIL_USER_SUCCESS,payload:data.user})
// console.log(data)

// }catch(error){
//     dispatch({type:DETAIL_USER_FAIL,payload:error.response.data})

//     console.log(error.response)

// }

// }

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
