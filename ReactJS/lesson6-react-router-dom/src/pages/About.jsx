import logo from "../assets/img/logo-png.png";

const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={logo}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            About Us
          </h1>
          <p className="lead">
            At eShop, we’re dedicated to delivering the ultimate Nintendo gaming
            experience for fans of all ages. As passionate gamers ourselves, we
            understand that Nintendo offers some of the most memorable and
            exciting gaming experiences available, which is why we’ve carefully
            curated a collection that brings together the best and brightest of
            Nintendo’s iconic universe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
