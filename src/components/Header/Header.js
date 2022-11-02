import "./Header.scss";

function Header(props) {
  return (
    <div>
      <header className="header">
        <img
          className="header__logo"
          alt="logo"
          src={"../../src/asset/Logo/Brain-Flix-logo.svg"}
        />
        <div className="header__links header__links--right">
          <input className="search" placeholder="Search..." />
          <div className="header__user"></div>
        </div>
        <div className="header__upload"></div>
      </header>
    </div>
  );
}

export default Header;
