import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {
    let dialogsElement =
        props.dialogsPage.dialogs.map((d) => {
            return <DialogItem name={d.name} key={d.id} id={d.id}/>
        });

    let messageElements =
        props.dialogsPage.messages.map((m) => {
            return <Message message={m.message} key={m.id}/>
        });

    // let newMessageBody = props.dialogsPage.newMessageBody;
    // const onSendMessageClick = () => {
    //     props.sendMassage();
    // };

    // const onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // };

    const addNewMessage = (values) => {
        props.sendMassage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__col}>
                <ul className={s.dialogs__list}>
                    {dialogsElement}
                </ul>
            </div>
            <div className={s.dialogs__col}>
                <div className={s.dialogs__messages}>
                    {messageElements}
                </div>
            </div>
            {/*<textarea className={s.textarea} onChange={onNewMessageChange}*/}
            {/*    // ref={textareaElem}*/}
            {/*          placeholder={'enter new message'}*/}
            {/*          value={newMessageBody}/>*/}
            {/*<button onClick={onSendMessageClick}>Send</button>*/}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} validate={[required, maxLength100]} name="newMessageBody" placeholder="Enter new message"/>
                <button>Send</button>
            </form>
        </div>
    )
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;