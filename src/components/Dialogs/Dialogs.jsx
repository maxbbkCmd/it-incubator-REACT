import React from "react";
import dialogs from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogIntem';
import Message from './Message/Message';


function getMessage(messages) {
  return messages.map(message => <Message message={message.message} />)
}

function getUserId(users) {
  return users.map(user => <DialogItem name={user.name} id={user.id} />)
};  

const Dialogs = (props) => {
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>
        {getUserId(props.userData)}
      </div>
      <div className={dialogs.messages}>
        {getMessage(props.messageData)}
      </div>
    </div>
  );
};

export default Dialogs;
