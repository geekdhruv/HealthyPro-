import "./FrameComponent5.css";

const FrameComponent5 = () => {
  return (
    <div className="frame-parent1">
      <div className="rectangle-group">
        <div className="frame-inner" />
        <b className="health-matters">{`Health Matters `}</b>
        <div className="frame-wrapper1">
          <img className="group-icon" alt="" src="/group-20.svg" />
        </div>
      </div>
      <div className="frame-wrapper2">
        <div className="one-small-step-for-your-health-parent">
          <h1 className="one-small-step">
            One small step for your health, a Leap for your future.
          </h1>
          <div className="wrapper-background-parent">
            <div className="wrapper-background">
              <img className="background-icon" alt="" src="/background.svg" />
            </div>
            <img
              className="social-media-discussion-icon"
              loading="lazy"
              alt=""
              src="/socialmediadiscussion.svg"
            />
          </div>
        </div>
      </div>
      <div className="using-your-bmi-index-we-calcul-wrapper">
        <b className="using-your-bmi">
          Using your BMI index we calculate whether the dish is suitable for
          you.
        </b>
      </div>
      <div className="rectangle-container">
        <div className="rectangle-div" />
        <div className="search-your-product-wrapper">
          <b className="search-your-product">Search your product</b>
        </div>
        <div className="frame-parent2">
          <img
            className="frame-child1"
            loading="lazy"
            alt=""
            src="/group-237461.svg"
          />
          <img
            className="frame-child2"
            loading="lazy"
            alt=""
            src="/group-237462.svg"
          />
          <img
            className="frame-child3"
            loading="lazy"
            alt=""
            src="/group-237463.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
