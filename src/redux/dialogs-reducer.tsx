const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
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
}

const dialogsReducer = (state = initialState,
                        action: { newText: any; type: any; }) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            return {
                ...state,
                newMessageText:'',
                messages: [...state.messages, newMessage]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}
export default dialogsReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})