export default function (state = true, action) {
    switch (action.name) {
        case 'TOGGLE_SIDEBAR':
            return !state;
        default:
            return state;
    }
}
