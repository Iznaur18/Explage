const Main = () => {
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className="main__contant__row">
            <div className="main__left-block">
              <div className="main__h1-container">
                <h1>
                  Building stellar <br /> websites for early <br /> startups
                </h1>
              </div>
              <div className="main__desc-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do <br />
                  eiusmod tempor incididunt.
                </p>
              </div>
              <div className="main__buttons-container">
                <button className="main__button">View our work</button>
                <button className="main__view-button">View Pricing →</button>
              </div>
            </div>
            <div className="main__right-block">
              <img src="../public/MainPhotoUI.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
