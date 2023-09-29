const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header_contant__row">
          <div className="header__logo">
            <img src="../public/explage.svg" width={50} alt="" />
          </div>
          <div className="header__info-row">
            <div className="header__info__block-row">
              <p>Home</p>
              <p>About us</p>
              <p>Pricing</p>
              <p>FAQ</p>
            </div>
            <div className="header__contact-us">Contact us</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
