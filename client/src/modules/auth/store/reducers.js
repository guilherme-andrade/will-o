import { REDUCER_TYPES } from '../config'

const {
  LOAD_PENDING,
  LOAD_SUCCESS,
  LOAD_FAILURE,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UPDATE_FIELD,
  RESET
} = REDUCER_TYPES

export default {
  [LOAD_PENDING]: (state, _action) => ({
    ...state,
    loading: true
  }),
  [LOAD_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    loaded: true,
    user: action.response.body.user
  }),
  [LOAD_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    loaded: false,
    error: action.error,
    token: null
  }),
  [LOGIN_PENDING]: (state, _action) => ({
    ...state,
    loggingIn: true
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    loggingIn: false,
    loggedIn: true,
    user: action.response.body.user,
    error: null,
    hasUnsavedChanges: false,
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    loggingIn: false,
    loggedIn: false,
    token: null,
    user: null,
    loginError: action.response.status
  }),
  [REGISTER_PENDING]: (state, _action) => ({
    ...state,
    loggingIn: true
  }),
  [REGISTER_SUCCESS]: (state, action) => ({
    ...state,
    loggingIn: false,
    loggedIn: true,
    user: action.response.body.user,
    error: null
  }),
  [REGISTER_FAILURE]: (state, action) => ({
    ...state,
    loggingIn: false,
    loggedIn: false,
    user: action.response.body,
    error: action.response.status
  }),
  [UPDATE_FIELD]: (state, action) => ({
    ...state,
    user: { ...state.user, [action.field]: action.value },
    hasUnsavedChanges: true,
  }),
  [RESET]: (state, _action) => ({
    ...state,
    loggingOut: true,
    loggedIn: false,
    token: null,
    user: {}
  })
}
