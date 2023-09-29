import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(false)

  const handleChangeOpen = () => {
    setOpen(open => !open)
  }

  return (
    <div className="FAQ">
      <div className="wrapper">
        <div className="FAQ__row">
          <div className="FAQ__block-1">
            <h1 className="FAQ__h1">Frequently asked questions</h1>
            <a className="FAQ__link" href="#">
              Contact us for more info
            </a>
          </div>
          <div className="FAQ__block-2">

            <div className="FAQ__row">
              <div className="FAQ__info__row">
                <div className="FAQ__number">01</div>
                <div>
                  <div className="FAQ__text">How much time does it take?</div>
                  <div className="FAQ__sub__text" style={open ? {display:"block"} : {display:"none"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
              <a onClick={handleChangeOpen} className="FAQ__plus">+</a>
            </div>
            <hr className="hr" />

            <div className="FAQ__row">
              <div className="FAQ__info__row">
                <div className="FAQ__number">02</div>
                <div>
                  <div className="FAQ__text">What is your class naming convention?</div>
                  <div className={!open ? "FAQ__sub__text dn" : "FAQ__sub__text"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
              <a onClick={handleChangeOpen} className="FAQ__plus">+</a>
            </div>
            <hr className="hr" />

            <div className="FAQ__row">
              <div className="FAQ__info__row">
                <div className="FAQ__number">02</div>
                <div>
                  <div className="FAQ__text">What is your class naming convention?</div>
                  <div className={!open ? "FAQ__sub__text dn" : "FAQ__sub__text"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
              <a onClick={handleChangeOpen} className="FAQ__plus">+</a>
            </div>
            <hr className="hr" />

            <div className="FAQ__row">
              <div className="FAQ__info__row">
                <div className="FAQ__number">02</div>
                <div>
                  <div className="FAQ__text">What is your class naming convention?</div>
                  <div className={!open ? "FAQ__sub__text dn" : "FAQ__sub__text"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
              <a onClick={handleChangeOpen} className="FAQ__plus">+</a>
            </div>
            <hr className="hr" />

            <div className="FAQ__row">
              <div className="FAQ__info__row">
                <div className="FAQ__number">02</div>
                <div>
                  <div className="FAQ__text">What is your class naming convention?</div>
                  <div className={!open ? "FAQ__sub__text dn" : "FAQ__sub__text"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
              <a onClick={handleChangeOpen} className="FAQ__plus">+</a>
            </div>
            <hr className="hr" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
