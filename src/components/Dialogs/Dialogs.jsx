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

const Dialogs = () => {
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>
        <DialogItem name='Max' id='1' />
        <DialogItem name='Sveta' id='2' />
        <DialogItem name='Arina' id='3' />
        <DialogItem name='Raf' id='4' />
        <DialogItem name='Cheri' id='5' />
      </div>
      <div className={dialogs.messages}>
        <Message message='Hello World' />
        <Message message='How are you' />
        <Message message='How is yot it camasutra' />
      </div>
    </div>
  );
};

export default Dialogs;
