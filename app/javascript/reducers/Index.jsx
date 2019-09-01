export default (state = { accessToken: null, client: null, uid: null }, action) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            state.accessToken = action.accessToken;
            return { ...state };
        case 'SET_CLIENT':
            state.client = action.client;
            return { ...state };
        case 'SET_UID':
            state.uid = action.uid;
            return { ...state };
        case 'SET_CURRENT_USER':
            state.currentUser = action.currentUser;
            return { ...state };
        default:
            return { ...state }
    }
}