import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`onboarding-page-3-child ${className}`}>
      <header className="frame-header">
        <div className="image-40-parent">
          <img
            className="image-40-icon"
            loading="lazy"
            alt=""
            src="/image-40@2x.png"
          />
          <div className="frame-div">
            <div className="image-2-parent">
              <img
                className="image-2-icon"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
              <img
                className="pin-3-1"
                loading="lazy"
                alt=""
                src="/pin-3-1.svg"
              />
              <div className="frame-wrapper1">
                <div className="x48g44w40th-steaswar-parent">
                  <div className="x48g44w40th-steaswar">
                    X48G+44W,40th St,Easwar.
                  </div>
                  <div className="caret-down-1-wrapper">
                    <img
                      className="caret-down-1"
                      alt=""
                      src="/caret-down-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper2">
              <div className="frame-parent1">
                <div className="button-5-parent">
                  <div className="button-5">
                    <a className="search-your-desired">
                      Search your desired ite...
                    </a>
                    <img className="search-icon" alt="" src="/search.svg" />
                  </div>
                  <div className="frame-wrapper3">
                    <div className="bell-1-parent">
                      <img
                        className="bell-1-icon"
                        loading="lazy"
                        alt=""
                        src="/bell-1.svg"
                      />
                      <img
                        className="favorite-2-icon"
                        alt=""
                        src="/favorite-2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="upload-images-wrapper">
                  <b className="upload-images1">Upload images</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper4">
          <div className="frame-parent2">
            <div className="frame-parent3">
              <div className="frame-parent4">
                <div className="image-55-wrapper">
                  <img
                    className="image-55-icon"
                    loading="lazy"
                    alt=""
                    src="/image-55@2x.png"
                  />
                </div>
                <a className="english">English</a>
              </div>
              <div className="menu-8-1-wrapper">
                <img className="menu-8-1" alt="" src="/menu-8-1.svg" />
              </div>
            </div>
            <div className="important-guidelines-wrapper">
              <div className="important-guidelines">Important guidelines</div>
            </div>
          </div>
        </div>
        <div className="button-6-wrapper">
          <div className="button-6">
            <div className="user-square-wrapper">
              <img className="user-square-icon" alt="" src="/user-square.svg" />
            </div>
            <a className="profile">Profile</a>
          </div>
        </div>
      </header>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
