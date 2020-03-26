import { AuthenticationState } from './../modals/authentication.modal';
import { AuthenticationActions, AuthenticationActionTypes } from '../actions/authentication.actions';

const initialState: AuthenticationState = {
    userName: '',
    isAuthenticated: false,
    error: undefined
};

export function AuthenticationReducer(state = initialState, action: AuthenticationActions) {
    console.log("AuthenticationReducer");

    switch (action.type) {
        case AuthenticationActionTypes.AUTHENTICATION:
            return {
                userName: action.payload
            };
        case AuthenticationActionTypes.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                userName: action.payload.userName,
                isAuthenticated: action.payload.isAuthenticated,
            };
        case AuthenticationActionTypes.AUTHENTICATION_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
