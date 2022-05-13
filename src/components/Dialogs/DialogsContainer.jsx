import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
//
// export default DialogsContainer;

// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsPage;
//
//                 const onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 };
//
//                 const onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyActionCreator(body));
//                 };
//                 return (
//                     <Dialogs dialogsPage={state} sendMassage={onSendMessageClick}
//                              updateNewMessageBody={onNewMessageChange}/>
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

// let AuthRedirectComponent = (props) => {
//     if (!props.isAuth) return <Redirect to="/login" />;
//     return <Dialogs {...props} />
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewMessageBody: (body) => {
        //     dispatch(updateNewMessageBodyActionCreator(body))
        // },
        sendMassage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);





