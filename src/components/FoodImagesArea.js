import PropTypes from "prop-types";
import "./FoodImagesArea.css";

const FoodImagesArea = ({ className = "" }) => {
  return (
    <div className={`food-images-area ${className}`}>
      <div className="container-62">
        <div className="food-image-placeholder">
          <div className="food-image-example-container">
            <div className="food-image-example">
              <div className="food-images">Product images</div>
            </div>
            <img
              className="image-62-icon"
              loading="lazy"
              alt=""
              src="/image-62@2x.png"
            />
          </div>
        </div>
        <div className="container-57">
          <div className="food-image-dropzone-content">
            <div className="food-image-preview">
              <img
                className="image-67-icon"
                loading="lazy"
                alt=""
                src="/image-67@2x.png"
              />
            </div>
            <div className="drag-drop1">{`Drag & Drop to upload or Browse.`}</div>
          </div>
          <div className="food-add-photos-button">
            <div className="container-52">
              <div className="add-photos1">Add photos</div>
              <div className="eu1">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodImagesArea.propTypes = {
  className: PropTypes.string,
};

export default FoodImagesArea;
