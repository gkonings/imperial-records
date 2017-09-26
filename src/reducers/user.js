 import * as userActions from '../constants/userActions'

 export const defaultState = {
   loggedInUser: null
 }

 const reducer = (state = {}, {type, payload}) => {
   switch (type) {
     case userActions.LOGIN_REQUEST:
       return {
         ...state,
         logginIn: true
       }

     case userActions.LOGIN_ERROR:
       return {
         ...state,
         logginIn: false,
         loginError: payload
       }

     case userActions.LOGIN_SUCCESS:
       return {
         ...state,
         logginIn: false,
         loginError: undefined,
         loggedInUser: payload
       }

     case userActions.LOGOUT_REQUEST:
       return {
         ...state,
         logginOut: true
       }

     case userActions.LOGOUT_ERROR:
       return {
         ...state,
         logginOut: false,
         logoutError: payload
       }

     case userActions.LOGOUT_SUCCESS:
       return {
         ...state,
         logginOut: false,
         logoutError: undefined,
         loggedInUser: undefined
       }

     default:
       return state
   }
 }

 export default reducer
