import navbar from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={navbar.nav}>
      <div className={navbar.item}>
        <NavLink to='/profile' className={({ isActive }) => isActive ? navbar.active : undefined}>Profile</NavLink>
      </div>
      <div className={navbar.item}>
        <NavLink to='/dialogs' activeClassName={navbar.active}>Messages</NavLink>
      </div>
      <div className={navbar.item}>
        <a href='#1'>News</a>
      </div>
      <div className={navbar.item}>
        <a href='#1'>Musik</a>
      </div>
      <div className={navbar.item}>
        <a href='#1'>Settings</a>
      </div>
    </nav>
  );
}; 

export default Navbar;
