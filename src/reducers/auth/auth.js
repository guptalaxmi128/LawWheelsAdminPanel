import * as actionTypes from '../../constants/actionTypes';

const storedProfile = localStorage.getItem('profile');
const initialProfile = storedProfile ? JSON.parse(storedProfile) : null;

const initialState = {
    login: initialProfile,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    state: 'idle',
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN:
            localStorage.setItem('profile', JSON.stringify(action.payload));
            localStorage.setItem('isAuthenticated', 'true');
            return {
                ...state,
                login: action.payload,
                isAuthenticated: true,
            };
        case actionTypes.LOGOUT:
            localStorage.removeItem('profile');
            localStorage.removeItem('isAuthenticated');
            return {
                ...state,
                login: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;
