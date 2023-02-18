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
            newMessageText: 'My new message'
        }
    },
    getState () {
       return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost  ()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state);
    },
    addMessage () {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText (newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state);
    },
    subscribe (observer: any) {
        this._callSubscriber = observer; //наблюдатель
    }
}
export default store;