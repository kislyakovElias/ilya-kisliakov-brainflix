//not working!!
// import "./Header.scss";

function HeaderTop(props) {
  return (
    <div>
      <header className="header">
        <div className="header__logo"></div>
        <div className="header__search"></div>
        <div className="header__upload"></div>
        <div className="header__user"></div>

        <div className="header__logo">{props.logo}</div>
        <div className="header__links header__links--right">
          <input className="search" placeholder="Search..." />
        </div>
      </header>
    </div>
  );
}

export default HeaderTop;
