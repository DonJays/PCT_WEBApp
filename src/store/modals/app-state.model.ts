import { RouterReducerState } from '@ngrx/router-store';
import { AuthenticationState } from './authentication.modal';
import { DashboardState } from './dashboard.modal';
import { RouterStateUrl } from '../reducers/routerCustomSerializer';

export interface BaseState {
    loading: boolean;
    error: Error;
}

export interface AppState {
    router: RouterReducerState<RouterStateUrl>;
    readonly authentication: AuthenticationState;
    readonly dashboard: DashboardState;
}
