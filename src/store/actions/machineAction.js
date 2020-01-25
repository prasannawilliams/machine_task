import { USER_LOGIN, USER_LOGIN_FORM, USER_LIST } from 'store/actionTypes/machineType'
import localUserJSON from 'utils/legacyData.json';

let localUserData = localUserJSON.userLocalDatabase;
let dashboardUserData = localUserJSON.usersList;


export const userLogin = payload => async dispatch => {
  if (payload.username === localUserData.username && payload.password === localUserData.password) {
    dispatch({
      type: USER_LOGIN,
      payload: "User logged in succesfully"
    });
    localStorage.setItem("userData", JSON.stringify(localUserData))
    const origin = window.location.origin;
    window.location.href = `${origin}/dashboard`;
  }
  else {
    dispatch({
      type: USER_LOGIN,
      payload: "Username/Password does'nt match. Please try again.",
    });
  }
};

export const usersList = payload => async dispatch => {
  dispatch({
    type: USER_LIST,
    payload: dashboardUserData
  });
};

export const userFormData = payload => ({
  type: USER_LOGIN_FORM,
  payload,
});