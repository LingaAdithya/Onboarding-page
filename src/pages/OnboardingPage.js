import FrameComponent from "../components/FrameComponent";
import Container1 from "../components/Container1";
import FoodImagesArea from "../components/FoodImagesArea";
import Container from "../components/Container";
import Footer from "../components/Footer";
import "./OnboardingPage.css";

const OnboardingPage = () => {
  return (
    <div className="onboarding-page-3">
      <FrameComponent />
      <section className="onboarding-page-3-inner">
        <div className="frame-parent">
          <div className="container-54-parent">
            <div className="container-54">
              <div className="container-54-inner">
                <div className="create-your-parent">
                  <div className="create-your"> Create your</div>
                  <div className="shop-page-wrapper">
                    <div className="shop-page">Shop page</div>
                  </div>
                </div>
              </div>
              <div className="frame-group">
                <div className="image-10-parent">
                  <img
                    className="image-10-icon"
                    loading="lazy"
                    alt=""
                    src="/image-10@2x.png"
                  />
                  <div className="shop-information-parent">
                    <div className="shop-information">Shop Information</div>
                    <div className="shop-name-container">
                      <p className="shop-name">Shop name, address,</p>
                      <p className="contact-no-owner">
                        contact no., owner details
                      </p>
                    </div>
                  </div>
                </div>
                <div className="frame-container">
                  <div className="image-8-parent">
                    <img
                      className="image-8-icon"
                      loading="lazy"
                      alt=""
                      src="/image-10@2x.png"
                    />
                    <div className="shop-type-timings-wrapper">
                      <div className="shop-type-container">
                        <p className="shop-type">{`Shop Type &`}</p>
                        <p className="timings">Timings</p>
                      </div>
                    </div>
                  </div>
                  <div className="establishment-cuisine-wrapper">
                    <div className="establishment-cuisine">{` `}</div>
                  </div>
                  <div className="establishment-products-card-wrapper">
                    <div className="establishment-products">{`Establishment & Products Card`}</div>
                  </div>
                  <div className="or-category-type-opening-hour-wrapper">
                    <div className="or-category-type">
                      or category type, opening hours
                    </div>
                  </div>
                  <div className="image-9-parent">
                    <img
                      className="image-9-icon"
                      loading="lazy"
                      alt=""
                      src="/image-10@2x.png"
                    />
                    <div className="frame-wrapper">
                      <div className="upload-images-parent">
                        <div className="upload-images">Upload Images</div>
                        <div className="products-shop-images-container">
                          <p className="products-shop">Products, Shop</p>
                          <p className="images">images</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Container1
              menuProductCardImages="Menu / Product Card images"
              yourMenuWillBeDirectlyVis="Your menu will be directly visible to customers on OneAppPlus "
              image64="/image-64@2x.png"
              image68="/image-68@2x.png"
              dragDropToUploadOrBrowse={`Drag & Drop to upload or Browse.`}
            />
          </div>
          <div className="button-40-parent">
            <div className="button-40">
              <div className="shop-id21294241">Shop ID:21294241</div>
            </div>
            <div className="container-61-wrapper">
              <Container1
                menuProductCardImages="Shop images"
                yourMenuWillBeDirectlyVis="Please upload at least one facade shot (picture of the shop front)"
                image64="/image-69@2x.png"
                image68="/image-65@2x.png"
                dragDropToUploadOrBrowse={`Drag & Drop to upload or Browse`}
                propFlex="unset"
                propMinWidth="unset"
                propAlignSelf="stretch"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="food-images-container">
        <div className="food-images-content">
          <FoodImagesArea />
          <Container />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OnboardingPage;
