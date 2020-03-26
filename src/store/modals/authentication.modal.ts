export interface AuthenticationState {
    userName: string;
    isAuthenticated: boolean;
    error?: Error;
}
