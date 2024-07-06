import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Container1.css";

const Container1 = ({
  className = "",
  menuProductCardImages,
  yourMenuWillBeDirectlyVis,
  image64,
  image68,
  dragDropToUploadOrBrowse,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const container60Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div className={`container-60 ${className}`} style={container60Style}>
      <div className="container-60-inner">
        <div className="frame-parent5">
          <div className="frame-wrapper5">
            <div className="frame-parent6">
              <div className="menu-product-card-images-wrapper">
                <div className="menu-product">{menuProductCardImages}</div>
              </div>
              <div className="your-menu-will">{yourMenuWillBeDirectlyVis}</div>
            </div>
          </div>
          <img className="image-64-icon" loading="lazy" alt="" src={image64} />
        </div>
      </div>
      <div className="container-58">
        <div className="frame-parent7">
          <div className="image-68-wrapper">
            <img className="image-68-icon" alt="" src={image68} />
          </div>
          <div className="drag-drop">{dragDropToUploadOrBrowse}</div>
        </div>
        <div className="container-50-wrapper">
          <div className="container-50">
            <div className="eu-wrapper">
              <div className="eu">+</div>
            </div>
            <div className="add-photos">Add photos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
  menuProductCardImages: PropTypes.string,
  yourMenuWillBeDirectlyVis: PropTypes.string,
  image64: PropTypes.string,
  image68: PropTypes.string,
  dragDropToUploadOrBrowse: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Container1;
