import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ className = "" }) => {
  return (
    <div className={`container-55 ${className}`}>
      <div className="button-41">
        <div className="back-icon-container">
          <img className="caret-left-icon" alt="" src="/caret-left.svg" />
        </div>
        <div className="go-back">Go back</div>
      </div>
      <div className="next-button">
        <div className="button-42">
          <div className="next">Next</div>
          <div className="next-icon-container">
            <img
              className="triangle-right-icon"
              alt=""
              src="/triangle-right.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
