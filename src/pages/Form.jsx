const Form = () => {
  return (
    <div className="form">
      <div className="wrapper">
        <div className="form__body">
          <div className="form__row">
            <div className="form__block-1">
              <div className="form__info">
                <h1 className="form__h1">
                  Building stellar websites for early startups
                </h1>
                <p className="form__p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            </div>
            <div className="form__block-2">
              <div className="form__inputs__info">
                <h3 className="form__h3">Send inquiry</h3>
                <p className="form__p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="form__inputs">
                  <input className="form__input" type="text" placeholder="Your Name"/>
                  <input className="form__input" type="text" placeholder="Email"/>
                  <input className="form__input" type="text" placeholder="Paste your Figma design URL"/>
                </div>
                <div className="form__button">
                  <button>Send an Inquiry</button>
                </div>
                <div className="form__a">
                  <a href="#">Send an Inquiry →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
