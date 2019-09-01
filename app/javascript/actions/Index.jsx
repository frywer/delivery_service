export const setCurrentUser = currentUser => ({
    type: 'SET_CURRENT_USER',
    currentUser: currentUser
});

export const setAccessToken = accessToken => ({
    type: 'SET_ACCESS_TOKEN',
    accessToken: accessToken
});

export const setClient = client => ({
    type: 'SET_CLIENT',
    client: client
});

export const setUid = uid => ({
    type: 'SET_UID',
    uid: uid
});
