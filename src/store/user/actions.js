export const LOGIN_USER = 'Login';
export const login = data => ({ type: LOGIN_USER, data });

export const LOGOUT_USER = 'Logout';
export const logout = () => ({ type: LOGOUT_USER });

export const CHECK_USER = 'Check user';
export const check = () => ({ type: CHECK_USER });

export const SET_USER = 'Set user';
export const setUser = data => ({ type: SET_USER, data });
