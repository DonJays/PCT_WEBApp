import { DashboardState } from './../modals/dashboard.modal';
import { DashboardActions, DashboardActionTypes } from '../actions/dashboard.actions';

const initialState: DashboardState = {
    loading: false,
    error: undefined,
};

export function DashboardReducer(state = initialState, action: DashboardActions) {
    switch (action.type) {
        case DashboardActionTypes.LOAD_DASHBOARD:
            return { ...state, loading: true };
        case DashboardActionTypes.LOAD_DASHBOARD_SUCCESS:
            return {
                state: action.payload, loading: false
            };
        case DashboardActionTypes.LOAD_DASHBOARD_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case DashboardActionTypes.ADD_PROPERTY_CONVERSION:
            return { ...state, loading: true };
        case DashboardActionTypes.ADD_PROPERTY_CONVERSION_SUCCESS:
            return { ...state, propertyConversion: [...state.propertyConversion, action.payload], loading: false };
        case DashboardActionTypes.ADD_PROPERTY_CONVERSION_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
