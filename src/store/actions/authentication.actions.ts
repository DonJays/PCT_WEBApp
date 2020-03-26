import { Action } from '@ngrx/store';
import { AuthenticationState } from './../modals/authentication.modal';

export enum AuthenticationActionTypes {
    AUTHENTICATION = '[AUTHENTICATION] Authentication',
    AUTHENTICATION_SUCCESS = '[AUTHENTICATION] Authentication Success',
    AUTHENTICATION_FAILURE = '[AUTHENTICATION] Authentication Failure',
}

export class AuthenticationAction implements Action {
    readonly type = AuthenticationActionTypes.AUTHENTICATION;

    constructor(public payload: string) { }
}

export class AuthenticationSuccessAction implements Action {
    readonly type = AuthenticationActionTypes.AUTHENTICATION_SUCCESS;

    constructor(public payload: AuthenticationState) { }
}

export class AuthenticationFailureAction implements Action {
    readonly type = AuthenticationActionTypes.AUTHENTICATION_FAILURE;

    constructor(public payload: Error) { }
}

export type AuthenticationActions = AuthenticationAction
    | AuthenticationSuccessAction
    | AuthenticationFailureAction;
