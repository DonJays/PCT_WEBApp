import { BaseState } from './app-state.model';

export interface PropertyConversion {
    marsha_code?: string;
    goLiveDate?: string;
    startedDate?: string;
}

export interface DashboardState extends BaseState {
    role?: string;
    eid?: string;
    message?: string;
    propertyConversion?: PropertyConversion[];
}
