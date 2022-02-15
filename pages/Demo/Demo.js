import React from "react";

/* 
Baner Image links

https://i.ibb.co/mh43P1t/1-1.jpg
https://i.ibb.co/5BMpgLX/1-1.png
https://i.ibb.co/mh43P1t/1-1.jpg
https://i.ibb.co/mh43P1t/1-1.jpg
https://i.ibb.co/Nn99d6w/2-1.jpg
https://i.ibb.co/5BMpgLX/1-1.png
https://i.ibb.co/Nn99d6w/2-1.jpg
https://i.ibb.co/kgBwJH8/3-1.jpg
https://i.ibb.co/r0PQJ2W/3-2.jpg
https://i.ibb.co/0n1Hmxv/3-3.jpg
https://i.ibb.co/zJM2yD7/3-4.jpg
https://i.ibb.co/kgBwJH8/3-1.jpg
https://i.ibb.co/nrCw7np/4-1.jpg
https://i.ibb.co/TB91kJm/4-2.jpg
https://i.ibb.co/LRvyTQL/6-1.jpg
https://i.ibb.co/v39rWBd/9-1.jpg
https://i.ibb.co/CP8gXXf/9-2.jpg
https://i.ibb.co/Lh0bQhn/10-1.jpg
https://i.ibb.co/HDK1Y42/10-2.jpg
https://i.ibb.co/HDK1Y42/10-2.jpg
https://i.ibb.co/Lh0bQhn/10-1.jpg
https://i.ibb.co/FYc4Lzy/10-5.jpg
https://i.ibb.co/JsRWcgx/10-6.jpg
https://i.ibb.co/5Ggw11D/10-7.jpg
https://i.ibb.co/5Ggw11D/10-7.jpg
https://i.ibb.co/JpLHqPP/10-9.jpg
https://i.ibb.co/Qcp99QF/11-1.jpg
https://i.ibb.co/Qcp99QF/11-1.jpg
https://i.ibb.co/Qcp99QF/11-1.jpg
https://i.ibb.co/g30Zsxm/12-1.jpg
https://i.ibb.co/g30Zsxm/12-1.jpg
https://i.ibb.co/g30Zsxm/12-1.jpg
https://i.ibb.co/g30Zsxm/12-1.jpg
https://i.ibb.co/kgBwJH8/3-1.jpg
https://i.ibb.co/zJM2yD7/3-4.jpg
https://i.ibb.co/0n1Hmxv/3-3.jpg
https://i.ibb.co/K7kG1nC/12-8.jpg
https://i.ibb.co/LRvyTQL/6-1.jpg
https://i.ibb.co/LRvyTQL/6-1.jpg
https://i.ibb.co/LRvyTQL/6-1.jpg
https://i.ibb.co/LRvyTQL/6-1.jpg
https://i.ibb.co/g7brbFX/ban-5.jpg
https://i.ibb.co/g7brbFX/ban-5.jpg
https://i.ibb.co/LRvyTQL/6-1.jpg
https://i.ibb.co/19dL0Yx/ban6-3.jpg
https://i.ibb.co/Nxy3f8V/ban6-4.png
https://i.ibb.co/JQqp4WK/ban6-5.png
https://i.ibb.co/VxXnyxS/full-width.png
https://i.ibb.co/vqkShwj/home-v3-banner.jpg
https://i.ibb.co/L9XptxG/poster.jpg
https://i.ibb.co/kHRV77v/side-1.png
https://i.ibb.co/kHRV77v/side-1.png
https://i.ibb.co/kHRV77v/side-1.png
https://i.ibb.co/KrX2x4R/vertical-bg.png
*/

export default function Demo() {
  return (
    <div>
      <div id="content" className="site-content">
        <div className="col-full">
          <div className="row">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                {/* Slider */}
                <div className="home-v1-slider home-slider">
                  <a href="shop.html">
                    <div
                      className="slider-1 banner"
                      style={{
                        backgroundIimage: `url("https://i.ibb.co/mh43P1t/1-1.jpg")`,
                      }}
                    ></div>
                  </a>

                  <a href="shop.html">
                    <div
                      className="slider-1 slider-2"
                      style={{
                        backgroundIimage: `url("https://i.ibb.co/mh43P1t/1-1.jpg")`,
                      }}
                    ></div>
                  </a>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
// Featured list


<div className="features-list">
                  <div className="features">
                    <div className="feature">
                      <div className="media">
                        <i className="feature-icon d-flex mr-3 tm tm-free-delivery"></i>
                        <div className="media-body feature-text">
                          <h5 className="mt-0">Free Delivery</h5>
                          <span>from $50</span>
                        </div>
                      </div>
                    </div>

                    <div className="feature">
                      <div className="media">
                        <i className="feature-icon d-flex mr-3 tm tm-feedback"></i>
                        <div className="media-body feature-text">
                          <h5 className="mt-0">99% Customer</h5>
                          <span>Feedbacks</span>
                        </div>
                      </div>
                    </div>

                    <div className="feature">
                      <div className="media">
                        <i className="feature-icon d-flex mr-3 tm tm-free-return"></i>
                        <div className="media-body feature-text">
                          <h5 className="mt-0">365 Days</h5>
                          <span>for free return</span>
                        </div>
                      </div>
                    </div>

                    <div className="feature">
                      <div className="media">
                        <i className="feature-icon d-flex mr-3 tm tm-safe-payments"></i>
                        <div className="media-body feature-text">
                          <h5 className="mt-0">Payment</h5>
                          <span>Secure System</span>
                        </div>
                      </div>
                    </div>

                    <div className="feature">
                      <div className="media">
                        <i className="feature-icon d-flex mr-3 tm tm-best-brands"></i>
                        <div className="media-body feature-text">
                          <h5 className="mt-0">Only Best</h5>
                          <span>Brands</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

*/
