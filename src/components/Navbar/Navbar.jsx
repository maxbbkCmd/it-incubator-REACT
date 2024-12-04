import navbar from'./Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={navbar.nav}>
      <div className={navbar.item}>
        <a href='#1'>Profile</a>
      </div>
      <div className={navbar.item}>
        <a href='#1'>Messages</a>
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
