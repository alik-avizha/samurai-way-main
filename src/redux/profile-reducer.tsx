const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 23
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 5
        },
    ],
    newPostText: 'My new post',
    profile: null
};

const profileReducer = (state = initialState,
                        action: {
                            profile: null;
                            type: string; newText: any; }) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
                return {...state, profile: action.profile}
            }

        default:
            return state;
    }
}
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})