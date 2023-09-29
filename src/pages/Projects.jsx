const Projects = () => {
  return (
    <div className="projects">
      <div className="wrapper">
        <div className="projects__header">
          <h1 className="projects__h1">View our projects</h1>
          <a className="projects__a" href="#">
            View More →
          </a>
        </div>
        <div className="projects__row">
          <div className="projects__img-1">
            <div className="project__image__wrapper-1">
              <img src="../../public/project/Card.jpg" alt="" />
            </div>
          </div>
          <div className="projects__img-2">
            <div className="project__image__wrapper-2">
              <img src="../../public/project/Card2.jpg" alt="" />
            </div>
            <div className="project__image__wrapper-3">
              <img src="../../public/project/Card3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
