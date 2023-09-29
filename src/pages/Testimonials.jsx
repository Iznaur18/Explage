const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="wrapper">
        <div className="testimonials__row">
          <div className="testimonials__block-1">
            <div className="testimonials__h1">
              What our clients say about us
            </div>
            <p className="testimonials__p">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
              sed.
            </p>
          </div>
          <div className="testimonials__block-2">
            <div className="testimonials__text">
              The best agency we’ve worked with so far. They <br /> understand
              our product and are able to add new <br /> features with a great
              focus.
            </div>
            <div className="testimonials__client__row">
              <div className="testimonials__client__block">
                <div className="testimonials__row">
                  <div className="testimonials__client__photo">
                    <img
                      width={50}
                      src="../../public/testimonials/client.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonials__client__data">
                    <p className="testimonials__client__name">Jenny Wilson</p>
                    <p className="testimonials__client__job">Vice President</p>
                  </div>
                </div>
              </div>
              <div className="testimonials__swiper">
                <div className="testimonials__row">
                  <div className="testimonials__arrow">{'<'}</div>
                  <div className="testimonials__arrow">{'>'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
