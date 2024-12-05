import React from "react";
import dialogs from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>
        <div className={dialogs.dialog + ' ' + dialogs.active}>Max</div>
        <div className={dialogs.dialog}>Sveta</div>
        <div className={dialogs.dialog}>Arina</div>
        <div className={dialogs.dialog}>Raf</div>
        <div className={dialogs.dialog}>Cheri</div>
      </div>
      <div className={dialogs.messages}>
        <div className={dialogs.message}>Hi</div>
        <div className={dialogs.message}>How are you</div>
        <div className={dialogs.message}>How is yot it camasutra</div>
      </div>
    </div>
  );
};

export default Dialogs;
