import Avatar from "../Avatar/Avatar";
import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";

function Header(props) {
  return (
    <div>
      <header className="header">
        <img className="header__logo" alt="logo" src={logo} />
        <div className="header__search">
          <input className="header__search__bar" placeholder="Search..." />
          <Avatar className="header__search__avatar" />
        </div>
        <div className="header__upload">
          <button className="header__upload__button">
            <img className="header__upload__button-img" alt="upload" />
            Upload
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
