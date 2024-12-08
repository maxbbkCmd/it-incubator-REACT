import { NavLink } from "react-router-dom";
import dialogs from '../Dialogs.module.css'

const DialogItem = ({ name, id }) => {
  let url = "/dialogs/";

  return (
    <div className={dialogs.dialog + " " + dialogs.active}>
      <NavLink to={url + id}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;