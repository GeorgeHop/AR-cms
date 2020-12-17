const initialUserData = {
    user: {}
};

export default function (state = initialUserData, action) {
    switch (action.type) {
        case 'LOGIN_USER' :
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true
            };
        case 'LOGOUT_USER' :
            return {
                ...state,
                user: state,
                isLoggedIn: false
            };
        default :
            return state;

    }
}
