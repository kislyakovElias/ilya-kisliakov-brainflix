import Avatar from "../Avatar/Avatar";
import "./Header.scss";

function Header(props) {
  return (
    <div>
      <header className="header">
        <img
          className="header__logo"
          alt="logo"
          src={"../../src/assets/Logo/Brain-Flix-logo.svg"}
        />
        <div className="header__links header__links--right">
          <input className="search" placeholder="Search..." />
        </div>
        <Avatar />
        <div className="header__upload"></div>
      </header>
    </div>
  );
}

export default Header;
