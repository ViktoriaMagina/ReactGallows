const HEAD = <div className="handman-drawing__man-had"></div>;
const BODY = <div className="handman-drawing__man-body"></div>;
const LEFT_LEG = <div className="handman-drawing__man-left-leg"></div>;
const RIGHT_LEG = <div className="handman-drawing__man-right-leg"></div>;
const LEFT_ARM = <div className="handman-drawing__man-left-arm"></div>;
const RIGHT_ARM = <div className="handman-drawing__man-right-arm"></div>;

interface HandmanDrawingProps {
  numberOfGuese: number;
}
const BODY_PARTS = [HEAD, BODY, LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM];
function HandmanDrawing({ numberOfGuese }: HandmanDrawingProps) {
  return (
    <div className="handman-drawing">
      <div className="handman-drawing__bar-box">
        <div className="handman-drawing__bottom-bar"></div>
        <div className="handman-drawing__vetr-bar"></div>
        <div className="handman-drawing__top-bar"></div>
        <div className="handman-drawing__left-bar"></div>
      </div>
      <div className="handman-drawing__man">
        {BODY_PARTS.slice(0, numberOfGuese)}
      </div>
    </div>
  );
}

export default HandmanDrawing;
