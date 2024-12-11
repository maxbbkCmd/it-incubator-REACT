import React from "react";
import dialogs from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogIntem";
import Message from "./Message/Message";
import { updateNewMessageBodyCreator } from '../Redux/dialog-reducer';
import { sendMessageCreator } from '../Redux/dialog-reducer';

const Dialogs = (props) => {
  const state = props.store.getState().messagePage;

  let messageElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));
  let getUserId = state.dialogs.map((user) => (
    <DialogItem name={user.name} id={user.id} />
  ));
  let newMessageBody = state.newMessageBody;

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>{getUserId}</div>
      <div className={dialogs.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder='Enter youe message'
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
