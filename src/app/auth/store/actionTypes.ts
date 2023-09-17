export const enum ActionTypes {
  REGISTER = '[Auth] register',
  REGISTER_SUCCESS = '[Auth] register success',
  REGISTER_FAILURE = '[Auth] register failure',

  LOGIN = '[Auth] login',
  LOGIN_SUCCESS = '[Auth] login success',
  LOGIN_FAILURE = '[Auth] login failure',

  GET_CURRENT_USER = '[Auth] get current user',
  GET_CURRENT_USER_TOKEN_NOT_FOUND = '[Auth] get current user token not found',
  GET_CURRENT_USER_SUCCESS = '[Auth] get current user success',
  GET_CURRENT_USER_FAILURE = '[Auth] get current user failure',
}
