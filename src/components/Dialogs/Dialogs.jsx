import React from "react";
import dialogs from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogIntem';
import Message from './Message/Message';



const Dialogs = (props) => {
    let messageElements = props.messages.messages.map(message => <Message message={message.message} />)
    let getUserId = props.dialogs.dialogs.map(user => <DialogItem name={user.name} id={user.id} />)
  
  const newMessage = React.createRef();
  const addMessage = () => {
    const a = newMessage.current.value;
    alert(a)
  }
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>
        {getUserId}
      </div>
      <div className={dialogs.messages}>
        {messageElements}
        <textarea ref={newMessage}></textarea>
        <button onClick={addMessage}>Click</button>
      </div>
    </div>
  );
};

export default Dialogs;
