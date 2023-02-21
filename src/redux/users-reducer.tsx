const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
};
const usersReducer = (state = initialState,
                      action: {
                          userId: any;
                          users: any;
                          type: string; newText: any;
                      }) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: { id: any; }) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: { id: any; }) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [ ...state.users, ...action.users]}
        }
        default:
            return state;
    }
}
export default usersReducer;

export const followAC = (userId: any) => ({type: FOLLOW, userId})

export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users: any) => ({type: SET_USERS, users})