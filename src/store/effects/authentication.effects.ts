import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    AuthenticationActionTypes,
    AuthenticationAction,
    AuthenticationSuccessAction,
    AuthenticationFailureAction
} from './../actions/authentication.actions';
import {  tap, catchError, map, exhaustMap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationEffects {
    @Effect() public authenticate = this.actions.pipe(
        ofType(AuthenticationActionTypes.AUTHENTICATION),
        exhaustMap((action: AuthenticationAction) => {
            return this.authenticationService.authenticate(action.payload).pipe(
                map(response => new AuthenticationSuccessAction(response)),
                catchError(error => of(new AuthenticationFailureAction(error)))
            );
        })
    );

    @Effect({ dispatch: false })
    loginSuccess = this.actions.pipe(
        ofType(AuthenticationActionTypes.AUTHENTICATION_SUCCESS),
        tap(() => this.router.navigate(['/dashboard']))
    );

    constructor(private actions: Actions, private authenticationService: AuthenticationService, private router: Router) { }
}
