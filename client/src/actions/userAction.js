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
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFIE_FAIL,
  UPDATE_PROFIE_REQUEST,
  UPDATE_PROFIE_SUCCESS,
  UPDATE_PROFILE_IMAGE_request,
  UPDATE_PROFILE_IMAGE_SUCCESS,
} from "../constants/userConstants";
import { confirmAlert } from 'react-confirm-alert'
import { useNavigate } from "react-router-dom";

const bashuel="http://localhost:5000"
export const login = (email, password) => async (dispatch, getState) => {
  // console.log(email, password);
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(`/api/auth/login`, { email, password });

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    // console.log(data);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data });

    // console.log(error.response);
  }

  
};

export const register = (userData) => async (dispatch,getState) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "Application/json" } };
    
    const { data } = await axios.post(`/api/auth/register`, userData, config);
    
    
    
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data,
    });
    
  }
};
// export const updateimage =(imguplod)=>async(dispatch)=>{
  //   try {
    //     dispatch({ type: UPDATE_PROFILE_IMAGE_request });
    //     const config = { headers: { "Content-Type": "multipart/form-data" } };  
    //       const data = await axios.put(
      //       `/api/auth/update/profilepic`,
      //       imguplod,
      //       config
      //     );
//     console.log(imguplod);
//     dispatch({ type: UPDATE_PROFILE_IMAGE_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PASSWORD_FAIL,
//       payload: error.response.data,
//     });
//   }
// }
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_USER_REQUEST });
    await axios.get(`/api/auth/logout`);
    
    dispatch({ type: LOGOUT_USER_SUCCESS });
 
    
  } catch (error) {
    dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message });
  }
};
//////////////////loaduser////////////////
export const loaduser = () => async (dispatch) => {
  try {
    dispatch({ type: DETAIL_USER_REQUEST });
    const { data } = await axios.get(`/api/auth/me`);

    dispatch({ type: DETAIL_USER_SUCCESS, payload: data.user });

    // console.log(data.user);
  } catch (error) {
    dispatch({ type: DETAIL_USER_FAIL });
  }
};
export const updatePassword = (password) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const data = await axios.put(`/api/auth/update/password`, password, config);

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const updateprofile = (updatedata) => async (dispatch) => {
  console.log(updatedata);
  try {
    dispatch({ type: UPDATE_PROFIE_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };  // const data = await axios.put(
      const data = await axios.put(
      `/api/auth/update/profile`,
      updatedata,
      config
    );
    // console.log(updatedata);
    dispatch({ type: UPDATE_PROFIE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFIE_FAIL,
      payload: error.response.data,
    });
  }
};
//////////////////loaduser////////////////

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
