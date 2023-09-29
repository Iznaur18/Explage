const Work = () => {
  return (
    <div className="work">
      <div className="wrapper">
        <div className="work__contant__row">
          <div className="work__block">
            <h1 className="work__h1">How we work</h1>
            <p className="work__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a className="work__a" href="#">get in touch with us →</a>
          </div>
          <div className="work__block-2">
            <div className="work__pointer__row">
              <div className="work__pointer__info">
                <img src="../../public/work-items/pointer 1.svg" width={50} alt="" />
                <h3 className="work__h3">Strategy</h3>
                <p className="woc70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
              <div className="work__pointer__info">
                <img src="../../public/work-items/pointer 2.svg" width={50} alt="" />
                <h3 className="work__h3">Wireframing</h3>
                <p className="woc70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
            </div>
            <div className="work__pointer__row">
              <div className="work__pointer__info">
                <img src="../../public/work-items/pointer 3.svg" width={50} alt="" />
                <h3 className="work__h3">Design</h3>
                <p className="woc70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
              <div className="work__pointer__info">
                <img src="../../public/work-items/pointer 4.svg" width={50} alt="" />
                <h3 className="work__h3">Development</h3>
                <p className="woc70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work