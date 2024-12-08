import React from "react";
import dialogs from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogIntem';
import Message from './Message/Message';



const Dialogs = (props) => {
    let messageElements = props.messages.messages.map(message => <Message message={message.message} />)
    let getUserId = props.dialogs.dialogs.map(user => <DialogItem name={user.name} id={user.id} />)
 
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>
        {getUserId}
      </div>
      <div className={dialogs.messages}>
        {messageElements}
      </div>
    </div>
  );
};

export default Dialogs;
