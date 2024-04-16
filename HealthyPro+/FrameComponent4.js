import { useMemo } from "react";
import "./FrameComponent4.css";

const FrameComponent4 = ({
  diet1,
  calculate,
  calories,
  propAlignSelf,
  propFlex,
  propFlex1,
  propBackground,
  propBackground1,
  onGoButtonContainerClick,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const goButtonStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex1,
      background: propBackground,
    };
  }, [propFlex1, propBackground]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  return (
    <div className="rectangle-parent1">
      <div className="frame-child4" />
      <div className="diet-1-wrapper">
        <img className="diet-1-icon" loading="lazy" alt="" src={diet1} />
      </div>
      <b className="calculate-calories">
        <span>
          <p className="calculate">{calculate}</p>
          <p className="calories">{calories}</p>
        </span>
      </b>
      <div className="go-button-wrapper" style={frameDivStyle}>
        <div
          className="go-button"
          onClick={onGoButtonContainerClick}
          style={goButtonStyle}
        >
          <div className="rectangle-parent2" style={frameDiv1Style}>
            <div className="frame-child5" style={rectangleDivStyle} />
            <b className="b">{`>>`}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
