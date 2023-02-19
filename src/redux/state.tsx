import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePage: {
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
            newPostText: 'My new post'
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Aleksandr'
                },
                {
                    id: 2,
                    name: 'Nikita'
                },
                {
                    id: 3,
                    name: 'Denis'
                },
                {
                    id: 4,
                    name: 'Kolya'
                },
                {
                    id: 5,
                    name: 'Dima'
                }
            ],
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'How are you?'
                },
                {
                    id: 3,
                    message: 'Where are you from?'
                },
                {
                    id: 4,
                    message: 'Why?'
                },
                {
                    id: 5,
                    message: 'When do you meet?'
                }
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer; //наблюдатель
    },

    dispatch(action: {
        newText: string;
        type: string;
    }) {
        this._state.profilePage= profileReducer(this._state.profilePage, action);
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar= sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
        }
}

export default store;

export class updateNewPostTextActionCreator {
}