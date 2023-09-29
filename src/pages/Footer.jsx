const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__row">
          <div className="footer__block-1">
            <div className="footer__logo">
              <img src="../public/explage.svg" width={80} alt="" />
            </div>
            <div className="footer__text">
              <p>
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </div>
            <div className="footer__call">
              <div className="footer__row">
                <div className="footer__email">
                  <h5>Email me at</h5>
                  <p>contact@website.com</p>
                </div>
                <div className="footer__callUs">
                  <h5>Call us</h5>
                  <p>0927 6277 28525</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__block-2">
            <div className="footer__h1">
              <h1>Lets Talk!</h1>
            </div>
            <div className="footer__text">
              <p>
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
            </div>
            <div className="footer__logos">
              <img src="../../public/footer/facebook.svg" alt="" />
              <img src="../../public/footer/twitter.svg" alt="" />
              <img src="../../public/footer/instagram.svg" alt="" />
              <img src="../../public/footer/link.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="wrapper">
          <div className="footer__copy__row">
            <div className="footer__copy__text">
              Copyright 2022, Finsweet.com
            </div>
            <div className="footer__copy__row footer__nav">
              <a href="#" >Home</a>
              <a href="#" >About us</a>
              <a href="#" >Features</a>
              <a href="#" >Pricing</a>
              <a href="#" >FAQ</a>
              <a href="#" >Blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
