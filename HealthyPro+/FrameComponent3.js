import { useCallback } from "react";
import FrameComponent4 from "./FrameComponent4";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  const onGoButtonContainerClick = useCallback(() => {
    // Please sync "Calorie Counter" to the project
  }, []);

  const onGoButtonContainer2Click = useCallback(() => {
    // Please sync "Food Nutritional Value" to the project
  }, []);

  const onGoButtonContainer3Click = useCallback(() => {
    // Please sync "Landing - New" to the project
  }, []);

  const onGoButtonContainer4Click = useCallback(() => {
    // Please sync "Ask Experts" to the project
  }, []);

  return (
    <section className="frame-section">
      <div className="features-we-provide-parent">
        <b className="features-we-provide">FEATURES WE PROVIDE</b>
        <div className="frame-parent3">
          <FrameComponent4
            diet1="/diet-1@2x.png"
            calculate="Calculate "
            calories="Calories"
            onGoButtonContainerClick={onGoButtonContainerClick}
          />
          <FrameComponent4
            diet1="/stats2-1@2x.png"
            calculate="Food Nutritional"
            calories="Information"
            propAlignSelf="unset"
            propFlex="unset"
            propFlex1="unset"
            propBackground="linear-gradient(180deg, #dd1b94, #ca21a5)"
            propBackground1="linear-gradient(180deg, #dd1b94, #ca21a5)"
            onGoButtonContainerClick={onGoButtonContainer2Click}
          />
          <div className="rectangle-parent3">
            <div className="frame-child6" />
            <div className="check-profile-parent">
              <b className="check-profile">
                <span className="check-profile-txt-container">
                  <p className="check">{`Check `}</p>
                  <p className="profile1">Profile</p>
                </span>
              </b>
              <img className="icon" loading="lazy" alt="" src="/icon@2x.png" />
            </div>
            <div className="go-button-container">
              <div className="go-button1" onClick={onGoButtonContainer3Click}>
                <div className="rectangle-parent4">
                  <div className="frame-child7" />
                  <b className="b1">{`>>`}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent5">
            <div className="frame-child8" />
            <div className="ask-experts-parent">
              <b className="ask-experts">
                <span className="ask-experts-txt-container">
                  <p className="ask">Ask</p>
                  <p className="experts">Experts</p>
                </span>
              </b>
              <img
                className="chatbot-1-icon"
                loading="lazy"
                alt=""
                src="/chatbot-1@2x.png"
              />
            </div>
            <div className="go-button-frame">
              <div className="go-button2" onClick={onGoButtonContainer4Click}>
                <div className="rectangle-parent6">
                  <div className="frame-child9" />
                  <b className="b2">{`>>`}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
