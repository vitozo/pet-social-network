// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vitalii'},
        {id: 2, name: 'Tima'},
        {id: 3, name: 'Evgen'},
        {id: 4, name: 'Katya'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'I have no problem'}
    ]
    // newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY:
        //     return {
        //         ...state,
        //         newMessageBody: action.body
        //     };
        case SEND_MESSAGE:
            // let newMessage = {
            //     id: 5,
            //     message: this._state.dialogsPage.newMessageText
            // }
            // this._state.dialogsPage.messages.push(newMessage);
            let body = action.newMessageBody;
            return {
                ...state,
                // newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
// export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;