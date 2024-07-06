import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="container-28">
        <div className="frame-parent8">
          <div className="newsletter-content-wrapper">
            <div className="newsletter-content">
              <div className="one-app-plus-title">
                <b className="oneapp-plus">OneApp Plus</b>
              </div>
              <div className="newsletter-details">
                <div className="newsletter-subscription">
                  <div className="news-letter">NEWS LETTER</div>
                  <div className="subscribe-to-our">
                    Subscribe to our news letter to get latest updates
                  </div>
                </div>
              </div>
              <div className="container-20">
                <div className="email-input">
                  <div className="your-email-address">Your Email Address</div>
                </div>
                <div className="button-7">
                  <a className="subscribe">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
          <div className="downloads-content-parent">
            <div className="downloads-content">
              <div className="downloads-area">
                <div className="downloads-container">
                  <div className="downloads-title">
                    <div className="download-our-apps">DOWNLOAD OUR APPS</div>
                  </div>
                  <div className="app-platform-links">
                    <div className="container-12">
                      <div className="app-store-link">
                        <img
                          className="image-49-icon"
                          alt=""
                          src="/image-49@2x.png"
                        />
                      </div>
                      <div className="play-store-link">
                        <div className="get-it-on">GET IT ON</div>
                        <div className="play-store-name">
                          <div className="google-play">Google Play</div>
                        </div>
                      </div>
                    </div>
                    <div className="container-13">
                      <div className="apple-1-wrapper">
                        <img
                          className="apple-1-icon"
                          loading="lazy"
                          alt=""
                          src="/apple-1.svg"
                        />
                      </div>
                      <div className="download-on-parent">
                        <div className="download-on">Download on</div>
                        <div className="app-store-wrapper">
                          <div className="app-store">App Store</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="social-media-content-wrapper">
                    <div className="social-media-content">
                      <div className="social-media-area">
                        <div className="follow-us-on">Follow us on</div>
                      </div>
                      <div className="social-media-icons">
                        <div className="social-icons-container">
                          <div className="social-icons">
                            <div className="platform-icons">
                              <img
                                className="image-11-icon"
                                alt=""
                                src="/image-11@2x.png"
                              />
                              <img
                                className="image-10-icon1"
                                loading="lazy"
                                alt=""
                                src="/image-10-1@2x.png"
                              />
                            </div>
                          </div>
                          <div className="more-social-icons">
                            <div className="additional-social-icons">
                              <img
                                className="image-13-icon"
                                loading="lazy"
                                alt=""
                                src="/image-13@2x.png"
                              />
                              <img
                                className="image-12-icon"
                                alt=""
                                src="/image-12@2x.png"
                              />
                            </div>
                            <img
                              className="image-14-icon"
                              loading="lazy"
                              alt=""
                              src="/image-14@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container-14">
                        <div className="digital-store-title">
                          <div className="get-it-ononeappplus-container">
                            <p className="get-it-on1">Get It On</p>
                            <p className="oneappplus">OneAppPlus</p>
                          </div>
                        </div>
                        <div className="digital-store">Digital Store</div>
                        <img
                          className="container-14-child"
                          loading="lazy"
                          alt=""
                          src="/group-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-account-parent">
                <div className="my-account">My Account</div>
                <div className="account-links">
                  <div className="profileaddressmy-ordersbecome">Profile</div>
                  <div className="profileaddressmy-ordersbecome1">Address</div>
                  <div className="profileaddressmy-ordersbecome2">
                    My Orders
                  </div>
                  <div className="account-link">
                    <div className="profileaddressmy-ordersbecome3">
                      Become a Seller
                    </div>
                  </div>
                  <div className="profileaddressmy-ordersbecome4">
                    Become a Delivery Man
                  </div>
                  <div className="profileaddressmy-ordersbecome5">
                    Testimonials
                  </div>
                </div>
              </div>
            </div>
            <div className="link-for-downloads-wrapper">
              <div className="link-for-downloads">Link For Downloads</div>
            </div>
          </div>
          <div className="quick-links-container-wrapper">
            <div className="quick-links-container">
              <div className="quick-links">Quick Links</div>
              <div className="link-items">
                <div className="contact-us-privacy-policy-term-parent">
                  <div className="contact-us-privacy">Contact Us</div>
                  <a className="contact-us-privacy1">Privacy Policy</a>
                  <a className="contact-us-privacy2">{`Terms & Conditions`}</a>
                  <div className="contact-us-privacy3">{`Retail E-Waste & recycling`}</div>
                  <a className="contact-us-privacy4">policy</a>
                  <div className="contact-us-privacy5">{`Cancellation & refund - return`}</div>
                  <a className="contact-us-privacy6">policy</a>
                  <div className="contact-us-privacy7">{`Delivery & shipping policy`}</div>
                  <a className="contact-us-privacy8">About Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="address">
          <div className="no-44333333dac-adithig1">
            No 44333333,DAC AdithiG1 ground
            Floor,40thStreet,Pammal,chennai,oneappplus@gmail.com044-35003402
          </div>
        </div>
      </div>
      <div className="container-25">
        <div className="all-rights-reserved">
          All Rights Reserved Managed by OneAppPlus
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
