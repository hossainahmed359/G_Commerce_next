import React from "react";

export default function Features() {
  return (
    <>
      <div className="features-list">
        <div className="features">
          <div className="feature">
            <div className="media d-flex justify-content-evenly">
              <i className="feature-icon d-flex mr-3 tm tm-free-delivery"></i>
              <div className="media-body feature-text">
                <h5 className="mt-0">Free Delivery</h5>
                <span>from $50</span>
              </div>
            </div>
          </div>

          <div className="feature">
            <div className="media d-flex justify-content-evenly">
              <i className="feature-icon d-flex mr-3 tm tm-feedback"></i>
              <div className="media-body feature-text">
                <h5 className="mt-0">99% Customer</h5>
                <span>Feedbacks</span>
              </div>
            </div>
          </div>

          <div className="feature">
            <div className="media d-flex justify-content-evenly">
              <i className="feature-icon d-flex mr-3 tm tm-free-return"></i>
              <div className="media-body feature-text">
                <h5 className="mt-0">365 Days</h5>
                <span>for free return</span>
              </div>
            </div>
          </div>

          <div className="feature">
            <div className="media d-flex justify-content-evenly">
              <i className="feature-icon d-flex mr-3 tm tm-safe-payments"></i>
              <div className="media-body feature-text">
                <h5 className="mt-0">Payment</h5>
                <span>Secure System</span>
              </div>
            </div>
          </div>

          <div className="feature">
            <div className="media d-flex justify-content-evenly">
              <i className="feature-icon d-flex mr-3 tm tm-best-brands"></i>
              <div className="media-body feature-text">
                <h5 className="mt-0">Only Best</h5>
                <span>Brands</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
