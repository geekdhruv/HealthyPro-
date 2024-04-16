import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FooterV from "../components/FooterV";
import "./LandingNew.css";

const LandingNew = () => {
  return (
    <div className="landing-new">
      <div className="landing-new-child" />
      <div className="landing-new-item" />
      <FrameComponent6 />
      <div className="frame-parent">
        <FrameComponent5 />
        <FrameComponent3 />
        <FrameComponent2 />
        <FrameComponent1 />
      </div>
      <img className="component-1-icon" alt="" src="/component-1@2x.png" />
      <img className="component-2-icon" alt="" src="/component-2@2x.png" />
      <FooterV />
    </div>
  );
};

export default LandingNew;
