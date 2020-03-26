import { Action } from '@ngrx/store';
import { DashboardState, PropertyConversion } from './../modals/dashboard.modal';

export enum DashboardActionTypes {
    LOAD_DASHBOARD = '[DASHBOARD] Load Dashboard',
    LOAD_DASHBOARD_SUCCESS = '[DASHBOARD] Load Dashboard Success',
    LOAD_DASHBOARD_FAILURE = '[DASHBOARD] Load Dashboard Failure',
    ADD_PROPERTY_CONVERSION = '[DASHBOARD] Add Property Conversion',
    ADD_PROPERTY_CONVERSION_SUCCESS = '[DASHBOARD] Add Property Conversion Success',
    ADD_PROPERTY_CONVERSION_FAILURE = '[DASHBOARD] Add Property Conversion Failure',
}

export class LoadDashboardAction implements Action {
    readonly type = DashboardActionTypes.LOAD_DASHBOARD;
}

export class LoadDashboardSuccessAction implements Action {
    readonly type = DashboardActionTypes.LOAD_DASHBOARD_SUCCESS;

    constructor(public payload: DashboardState) { }
}

export class LoadDashboardFailureAction implements Action {
    readonly type = DashboardActionTypes.LOAD_DASHBOARD_FAILURE;

    constructor(public payload: Error) { }
}

export class AddPropertyConversionAction implements Action {
    readonly type = DashboardActionTypes.ADD_PROPERTY_CONVERSION;

    constructor(public payload: PropertyConversion) { }
}

export class AddPropertyConversionSucessAction implements Action {
    readonly type = DashboardActionTypes.ADD_PROPERTY_CONVERSION_SUCCESS;

    constructor(public payload: PropertyConversion) { }
}

export class AddPropertyConversionFailureAction implements Action {
    readonly type = DashboardActionTypes.ADD_PROPERTY_CONVERSION_FAILURE;

    constructor(public payload: Error) { }
}

export type DashboardActions = LoadDashboardAction
    | LoadDashboardSuccessAction
    | LoadDashboardFailureAction
    | AddPropertyConversionAction
    | AddPropertyConversionSucessAction
    | AddPropertyConversionFailureAction;
