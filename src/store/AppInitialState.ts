import { AppState } from "./AppState";

export const AppInitialState: AppState = {
    loading: {
        show: false
    },
    login: {
        error: null,
        isLoggedIn: false,
        isLoggingIn: false,
        isRecoveringPassword: false,
        isRecoveredPassword: false,
        user: null
    },
    register: {
        error: null,
        isRegistering: false,
        isRegistered: false
    },
};
