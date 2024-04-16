import { useCallback } from "react";
import "./FrameComponent6.css";

const FrameComponent6 = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Login/ Sign Up Page" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Login/ Sign Up Page" to the project
  }, []);

  return (
    <header className="landing-new-inner">
      <div className="frame-group">
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/group-1@2x.png"
        />
        <div className="healthpro-wrapper">
          <b className="healthpro">HealthPro+</b>
        </div>
        <div className="frame-wrapper">
          <div className="home-parent" onClick={onGroupContainerClick}>
            <b className="home">Home</b>
            <div className="musicart-wrapper">
              <div className="musicart" />
            </div>
          </div>
        </div>
        <div className="frame-container">
          <div className="profile-parent">
            <b className="profile">Profile</b>
            <b className="community">Community</b>
          </div>
        </div>
        <div className="frame-div">
          <button className="rectangle-parent" onClick={onFrameButtonClick}>
            <div className="frame-item" />
            <b className="log-in">Log In</b>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent6;
