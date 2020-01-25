import { USER_LOGIN, USER_LOGIN_FORM, USER_LIST } from 'store/actionTypes/machineType'

const initialState = {
  sampleState: 'initial state',
  userName: '',
  password: '',
  loginResponse: '',
  usersListArr: [],
}

const sampleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      return {
        ...state,
        loginResponse: payload,
      };
    }
    case USER_LOGIN_FORM: {
      return {
        ...state,
        ...payload,
      };
    }
    case USER_LIST: {
      return {
        ...state,
        ...payload,
        usersListArr: payload
      };
    }
    default: {
      return state
    }
  }
}

export default sampleReducer
