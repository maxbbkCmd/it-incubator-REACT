import React from "react";
import dialogs from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, id }) => {
  let url = "/dialogs/";

  return (
    <div className={dialogs.dialog + " " + dialogs.active}>
      <NavLink to={url + id}>{name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={dialogs.message}>{props.message}</div>;
};

const userData = [
  {id: 1, name: 'Max'},
  {id: 2, name: 'Sveta'},
  {id: 3, name: 'Arina'},
  {id: 4, name: 'Raf'},
  {id: 5, name: 'Cheri'},
  {id: 6, name: 'Papa'},
  {id: 7, name: 'Mama'},
];

const messageData = [
  {id: 1, message: 'qqq'},
  {id: 2, message: 'aaa'},
  {id: 3, message: 'ssss'},
  {id: 4, message: 'dddd'},
];

function getMessage(messages) {
  return messages.map(message => <Message message={message.message} />)
}

function getUserId(users) {
  return users.map(user => <DialogItem name={user.name} id={user.id} />)
};  

const Dialogs = () => {
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>
        {getUserId(userData)}
      </div>
      <div className={dialogs.messages}>
        {getMessage(messageData)}
      </div>
    </div>
  );
};

export default Dialogs;
