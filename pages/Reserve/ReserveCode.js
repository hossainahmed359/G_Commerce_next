import React from "react";

export default function ReserveCode() {
  return (
    <>
      {/* 
    <div>
      <section
        className="section-top-categories section-categories-carousel"
        id="categories-carousel-1"
      >
        <header className="section-header">
          <h4 className="pre-title">Featured</h4>
          <h2 className="section-title">
            Top categories <br />
            this week
          </h2>
          <nav className="custom-slick-nav"></nav>

          <a className="readmore-link" href="#">
            Full Catalog
          </a>
        </header>

        <div
          className="product-categories-1 product-categories-carousel"
          data-ride="tm-slick-carousel"
          data-wrap=".products"
          data-slick='{"slidesToShow":5,"slidesToScroll":1,"dots":false,"arrows":true,"prevArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-left\"&gt;&lt;\/i&gt;&lt;\/a&gt;","nextArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-right\"&gt;&lt;\/i&gt;&lt;\/a&gt;","appendArrows":"#categories-carousel-1 .custom-slick-nav","responsive":[{"breakpoint":1200,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":1400,"settings":{"slidesToShow":4,"slidesToScroll":4}}]}'
        >
          <div className="woocommerce columns-5">
            <div className="products">
              <div className="product-category product first">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="All in One PC"
                    src="../../styles/assets/images/category/16.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    All in One PC
                  </h2>
                </a>
              </div>

              <div className="product-category product">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Audio &amp; Music"
                    src="../../styles/assets/images/category/17.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    Audio &amp; Music
                  </h2>
                </a>
              </div>

              <div className="product-category product">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Cells &amp; Tablets"
                    src="../../styles/assets/images/category/18.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    Cells &amp; Tablets
                  </h2>
                </a>
              </div>

              <div className="product-category product">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Computers &amp; Laptops"
                    src="../../styles/assets/images/category/19.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    Computers &amp; Laptops
                  </h2>
                </a>
              </div>

              <div className="product-category product last">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Desktop PCs"
                    src="../../styles/assets/images/category/20.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    Desktop PCs
                  </h2>
                </a>
              </div>

              <div className="product-category product first">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Digital Cameras"
                    src="../../styles/assets/images/category/21.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    Digital Cameras
                  </h2>
                </a>
              </div>

              <div className="product-category product">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Games &amp; Consoles"
                    src="../../styles/assets/images/category/22.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    Games &amp; Consoles
                  </h2>
                </a>
              </div>

              <div className="product-category product">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Headphones"
                    src="../../styles/assets/images/category/23.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    Headphones
                  </h2>
                </a>
              </div>

              <div className="product-category product">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Home Entertainment"
                    src="../../styles/assets/images/category/24.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    Home Entertainment
                  </h2>
                </a>
              </div>

              <div className="product-category product last">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Home Theater &amp; Audio"
                    src="../../styles/assets/images/category/25.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    Home Theater &amp; Audio
                  </h2>
                </a>
              </div>

              <div className="product-category product first">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Laptops"
                    src="../../styles/assets/images/category/18.png"
                  />
                  <h2 className="woocommerce-loop-category__title">Laptops</h2>
                </a>
              </div>

              <div className="product-category product">
                <a href="product-category.html">
                  <img
                    width="224"
                    height="197"
                    alt="Mac Computers"
                    src="../../styles/assets/images/category/22.png"
                  />
                  <h2 className="woocommerce-loop-category__title">
                    Mac Computers
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-hot-new-arrivals section-products-carousel-tabs techmarket-tabs">
        <div className="section-products-carousel-tabs-wrap">
          <header className="section-header">
            <h2 className="section-title">Hot Best Sellers</h2>
            <ul role="tablist" className="nav justify-content-end">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#tab-59f89f08825d50"
                  data-toggle="tab"
                >
                  Top 20
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#tab-59f89f08825d51"
                  data-toggle="tab"
                >
                  Audio &amp; Video
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#tab-59f89f08825d52"
                  data-toggle="tab"
                >
                  Laptops &amp; Computers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#tab-59f89f08825d53"
                  data-toggle="tab"
                >
                  Video Cameras
                </a>
              </li>
            </ul>
          </header>

          <div className="tab-content">
            <div
              id="tab-59f89f08825d50"
              className="tab-pane active"
              role="tabpanel"
            >
              <div
                className="products-carousel"
                data-ride="tm-slick-carousel"
                data-wrap=".products"
                data-slick='{"infinite":false,"slidesToShow":7,"slidesToScroll":7,"dots":true,"arrows":false,"responsive":[{"breakpoint":700,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":780,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}},{"breakpoint":1400,"settings":{"slidesToShow":5,"slidesToScroll":5}}]}'
              >
                <div className="container-fluid">
                  <div className="woocommerce">
                    <div className="products">
                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/12.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Bbd 23-Inch Screen LED-Lit Monitorss Buds
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/14.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 262.81</span>
                            </ins>
                            <del>
                              <span className="amount">399.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/6.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Gear Virtual Reality 3D with Bluetooth Glasses
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/1.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Smart Watches 3 SWR50
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/15.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 399.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/7.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 789.95</span>
                            </ins>
                            <del>
                              <span className="amount">999.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Bluetooth on-ear PureBass Headphones
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/8.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Video & Air Quality Monitor
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/10.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Xtreme ultimate splashproof portable speaker
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/16.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 262.81</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/2.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 309.95</span>
                            </ins>
                            <del>
                              <span className="amount">459.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            ZenBook 3 Ultrabook 8GB 512SSD W10
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/3.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            On-ear Wireless NXTG
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/4.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            4K Action Cam with Wi-Fi & GPS
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/9.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Watch Stainless with Grey Suture Leather Strap
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/5.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            XONE Wireless Controller
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/11.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Xtreme ultimate splashproof portable speaker
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/13.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Drone WIFI FPV With 4K
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="tab-59f89f08825d51" className="tab-pane" role="tabpanel">
              <div
                className="products-carousel"
                data-ride="tm-slick-carousel"
                data-wrap=".products"
                data-slick='{"infinite":false,"slidesToShow":7,"slidesToScroll":7,"dots":true,"arrows":false,"responsive":[{"breakpoint":700,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":780,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}},{"breakpoint":1400,"settings":{"slidesToShow":5,"slidesToScroll":5}}]}'
              >
                <div className="container-fluid">
                  <div className="woocommerce">
                    <div className="products">
                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/7.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 789.95</span>
                            </ins>
                            <del>
                              <span className="amount">999.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Bluetooth on-ear PureBass Headphones
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/15.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 399.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/16.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 262.81</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/12.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Bbd 23-Inch Screen LED-Lit Monitorss Buds
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/10.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Xtreme ultimate splashproof portable speaker
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/14.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 262.81</span>
                            </ins>
                            <del>
                              <span className="amount">399.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/4.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            4K Action Cam with Wi-Fi & GPS
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/6.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Gear Virtual Reality 3D with Bluetooth Glasses
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/9.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Watch Stainless with Grey Suture Leather Strap
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/2.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 309.95</span>
                            </ins>
                            <del>
                              <span className="amount">459.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            ZenBook 3 Ultrabook 8GB 512SSD W10
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/3.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            On-ear Wireless NXTG
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/8.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Video & Air Quality Monitor
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/5.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            XONE Wireless Controller
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/13.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Drone WIFI FPV With 4K
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/11.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Xtreme ultimate splashproof portable speaker
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/1.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Smart Watches 3 SWR50
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="tab-59f89f08825d52" className="tab-pane" role="tabpanel">
              <div
                className="products-carousel"
                data-ride="tm-slick-carousel"
                data-wrap=".products"
                data-slick='{"infinite":false,"slidesToShow":7,"slidesToScroll":7,"dots":true,"arrows":false,"responsive":[{"breakpoint":700,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":780,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}},{"breakpoint":1400,"settings":{"slidesToShow":5,"slidesToScroll":5}}]}'
              >
                <div className="container-fluid">
                  <div className="woocommerce">
                    <div className="products">
                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/10.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Xtreme ultimate splashproof portable speaker
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/2.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 309.95</span>
                            </ins>
                            <del>
                              <span className="amount">459.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            ZenBook 3 Ultrabook 8GB 512SSD W10
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/7.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 789.95</span>
                            </ins>
                            <del>
                              <span className="amount">999.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Bluetooth on-ear PureBass Headphones
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/6.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Gear Virtual Reality 3D with Bluetooth Glasses
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/12.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Bbd 23-Inch Screen LED-Lit Monitorss Buds
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/14.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 262.81</span>
                            </ins>
                            <del>
                              <span className="amount">399.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/11.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Xtreme ultimate splashproof portable speaker
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/13.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Drone WIFI FPV With 4K
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/8.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Video & Air Quality Monitor
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/5.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            XONE Wireless Controller
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/4.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            4K Action Cam with Wi-Fi & GPS
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/9.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Watch Stainless with Grey Suture Leather Strap
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/3.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            On-ear Wireless NXTG
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/16.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 262.81</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/1.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Smart Watches 3 SWR50
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/15.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 399.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="tab-59f89f08825d53" className="tab-pane" role="tabpanel">
              <div
                className="products-carousel"
                data-ride="tm-slick-carousel"
                data-wrap=".products"
                data-slick='{"infinite":false,"slidesToShow":7,"slidesToScroll":7,"dots":true,"arrows":false,"responsive":[{"breakpoint":700,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":780,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}},{"breakpoint":1400,"settings":{"slidesToShow":5,"slidesToScroll":5}}]}'
              >
                <div className="container-fluid">
                  <div className="woocommerce">
                    <div className="products">
                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/9.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Watch Stainless with Grey Suture Leather Strap
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/10.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Xtreme ultimate splashproof portable speaker
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/6.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Gear Virtual Reality 3D with Bluetooth Glasses
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/15.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 399.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/5.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            XONE Wireless Controller
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/16.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 262.81</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/4.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            4K Action Cam with Wi-Fi & GPS
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/1.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Smart Watches 3 SWR50
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/12.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Bbd 23-Inch Screen LED-Lit Monitorss Buds
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/8.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Video & Air Quality Monitor
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/2.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 309.95</span>
                            </ins>
                            <del>
                              <span className="amount">459.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            ZenBook 3 Ultrabook 8GB 512SSD W10
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/13.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Drone WIFI FPV With 4K
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/14.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 262.81</span>
                            </ins>
                            <del>
                              <span className="amount">399.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Band Fitbit Flex
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <span className="onsale">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              150.04
                            </span>
                          </span>
                          <img
                            src="../../styles/assets/images/products/7.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> 789.95</span>
                            </ins>
                            <del>
                              <span className="amount">999.00</span>
                            </del>
                            <span className="amount"> </span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Bluetooth on-ear PureBass Headphones
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/3.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            On-ear Wireless NXTG
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>

                      <div className="product">
                        <div className="yith-wcwl-add-to-wishlist">
                          <a
                            href="wishlist.html"
                            rel="nofollow"
                            className="add_to_wishlist"
                          >
                            Add to Wishlist
                          </a>
                        </div>
                        <a
                          href="single-product-fullwidth.html"
                          className="woocommerce-LoopProduct-link"
                        >
                          <img
                            src="../../styles/assets/images/products/11.jpg"
                            width="224"
                            height="197"
                            className="wp-post-image"
                            alt=""
                          />
                          <span className="price">
                            <ins>
                              <span className="amount"> </span>
                            </ins>
                            <span className="amount"> 456.00</span>
                          </span>

                          <h2 className="woocommerce-loop-product__title">
                            Xtreme ultimate splashproof portable speaker
                          </h2>
                        </a>
                        <div className="hover-area">
                          <a
                            className="button add_to_cart_button"
                            href="cart.html"
                            rel="nofollow"
                          >
                            Add to cart
                          </a>
                          <a
                            className="add-to-compare-link"
                            href="compare.html"
                          >
                            Add to compare
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="banners">
        <div className="row">
          <div className="banner banner-long text-in-right">
            <a href="shop.html">
              <div
                style="
                            background-size: cover;
                            background-position: center center;
                            background-image: url(../../styles/assets/images/banner/3-2.jpg);
                            height: 259px;
                          "
                className="banner-bg"
              ></div>
            </a>
          </div>

          <div className="banner banner-short text-in-left">
            <a href="shop.html">
              <div
                style="
                            background-size: cover;
                            background-position: center center;
                            background-image: url(../../styles/assets/images/banner/3-3.jpg);
                            height: 259px;
                          "
                className="banner-bg"
              ></div>
            </a>
          </div>
        </div>
      </div>

      <section
        className="section-landscape-products-carousel 4-column-landscape-carousel"
        id="landscape-products-carousel"
      >
        <header className="section-header">
          <h2 className="section-title">Video Cameras & Photography</h2>
          <nav className="custom-slick-nav"></nav>
        </header>
        <div
          className="products-carousel"
          data-ride="tm-slick-carousel"
          data-wrap=".products"
          data-slick='{"slidesToShow":4,"slidesToScroll":2,"dots":false,"arrows":true,"prevArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-left\"&gt;&lt;\/i&gt;&lt;\/a&gt;","nextArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-right\"&gt;&lt;\/i&gt;&lt;\/a&gt;","appendArrows":"#landscape-products-carousel .custom-slick-nav","responsive":[{"breakpoint":1200,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":1400,"settings":{"slidesToShow":3,"slidesToScroll":3}}]}'
        >
          <div className="container-fluid">
            <div className="woocommerce columns-5">
              <div className="products">
                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-2.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> </span>
                          </ins>
                          <span className="amount"> $500</span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          Headset 3D Glasses VR for Android
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-6.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> </span>
                          </ins>
                          <span className="amount"> $600</span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          ZenBook 3 Ultrabook 8GB 512SSD W10
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-3.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> $3,788.00</span>
                          </ins>
                          <del>
                            <span className="amount">$4,780.00</span>
                          </del>
                          <span className="amount"> </span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          PowerBank 4400
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-3.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> $3,788.00</span>
                          </ins>
                          <del>
                            <span className="amount">$4,780.00</span>
                          </del>
                          <span className="amount"> </span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          PowerBank 4400
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-5.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> $3,788.00</span>
                          </ins>
                          <del>
                            <span className="amount">$4,780.00</span>
                          </del>
                          <span className="amount"> </span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          Smart Watches 3 SWR50
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-1.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> $3,788.00</span>
                          </ins>
                          <del>
                            <span className="amount">$4,780.00</span>
                          </del>
                          <span className="amount"> </span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          Unlocked Android 6″ Inch 4.4.2 Dual Core
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-4.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> </span>
                          </ins>
                          <span className="amount"> $800</span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          Snap White Instant Digital Camera in White
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-4.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> </span>
                          </ins>
                          <span className="amount"> $800</span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          Snap White Instant Digital Camera in White
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="banner full-width-banner">
        <a href="shop.html">
          <div
            style="
                        background-size: cover;
                        background-position: center center;
                        background-image: url(../../styles/assets/images/banner/full-width.png);
                        height: 236px;
                      "
            className="banner-bg"
          ></div>
        </a>
      </div>

      <section
        className="section-landscape-products-carousel recently-viewed"
        id="recently-viewed"
      >
        <header className="section-header">
          <h2 className="section-title">Recently viewed products</h2>
          <nav className="custom-slick-nav"></nav>
        </header>
        <div
          className="products-carousel"
          data-ride="tm-slick-carousel"
          data-wrap=".products"
          data-slick='{"slidesToShow":5,"slidesToScroll":2,"dots":true,"arrows":true,"prevArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-right\"&gt;&lt;\/i&gt;&lt;\/a&gt;","nextArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-left\"&gt;&lt;\/i&gt;&lt;\/a&gt;","appendArrows":"#recently-viewed .custom-slick-nav","responsive":[{"breakpoint":992,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":1200,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1400,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1700,"settings":{"slidesToShow":4,"slidesToScroll":4}}]}'
        >
          <div className="container-fluid">
            <div className="woocommerce columns-5">
              <div className="products">
                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-3.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> $3,788.00</span>
                          </ins>
                          <del>
                            <span className="amount">$4,780.00</span>
                          </del>
                          <span className="amount"> </span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          PowerBank 4400
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-2.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> </span>
                          </ins>
                          <span className="amount"> $500</span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          Headset 3D Glasses VR for Android
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-4.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> </span>
                          </ins>
                          <span className="amount"> $800</span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          Snap White Instant Digital Camera in White
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-5.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> $3,788.00</span>
                          </ins>
                          <del>
                            <span className="amount">$4,780.00</span>
                          </del>
                          <span className="amount"> </span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          Smart Watches 3 SWR50
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-6.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> </span>
                          </ins>
                          <span className="amount"> $600</span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          ZenBook 3 Ultrabook 8GB 512SSD W10
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-1.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> $3,788.00</span>
                          </ins>
                          <del>
                            <span className="amount">$4,780.00</span>
                          </del>
                          <span className="amount"> </span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          Unlocked Android 6″ Inch 4.4.2 Dual Core
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-3.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> $3,788.00</span>
                          </ins>
                          <del>
                            <span className="amount">$4,780.00</span>
                          </del>
                          <span className="amount"> </span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          PowerBank 4400
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="landscape-product product">
                  <a
                    className="woocommerce-LoopProduct-link"
                    href="single-product-fullwidth.html"
                  >
                    <div className="media">
                      <img
                        className="wp-post-image"
                        src="../../styles/assets/images/products/card-4.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="price">
                          <ins>
                            <span className="amount"> </span>
                          </ins>
                          <span className="amount"> $800</span>
                        </span>

                        <h2 className="woocommerce-loop-product__title">
                          Snap White Instant Digital Camera in White
                        </h2>
                        <div className="techmarket-product-rating">
                          <div title="Rated 0 out of 5" className="star-rating">
                            <span style="width: 0%">
                              <strong className="rating">0</strong> out of 5
                            </span>
                          </div>
                          <span className="review-count">(0)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brands-carousel">
        <h2 className="sr-only">Brands Carousel</h2>
        <div
          className="col-full"
          data-ride="tm-slick-carousel"
          data-wrap=".brands"
          data-slick='{"slidesToShow":6,"slidesToScroll":1,"dots":false,"arrows":true,"responsive":[{"breakpoint":400,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":800,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":992,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}},{"breakpoint":1400,"settings":{"slidesToShow":5,"slidesToScroll":5}}]}'
        >
          <div className="brands">
            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>apple</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="apple"
                    src="../../styles/assets/images/brands/1.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>bosch</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="bosch"
                    src="../../styles/assets/images/brands/2.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>cannon</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="cannon"
                    src="../../styles/assets/images/brands/3.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>connect</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="connect"
                    src="../../styles/assets/images/brands/4.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>galaxy</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="galaxy"
                    src="../../styles/assets/images/brands/5.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>gopro</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="gopro"
                    src="../../styles/assets/images/brands/6.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>handspot</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="handspot"
                    src="../../styles/assets/images/brands/7.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>kinova</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="kinova"
                    src="../../styles/assets/images/brands/8.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>nespresso</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="nespresso"
                    src="../../styles/assets/images/brands/9.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>samsung</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="samsung"
                    src="../../styles/assets/images/brands/10.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>speedway</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="speedway"
                    src="../../styles/assets/images/brands/11.png"
                  />
                </figure>
              </a>
            </div>

            <div className="item">
              <a href="shop.html">
                <figure>
                  <figcaption className="text-overlay">
                    <div className="info">
                      <h4>yoko</h4>
                    </div>
                  </figcaption>
                  <img
                    width="145"
                    height="50"
                    className="img-responsive desaturate"
                    alt="yoko"
                    src="../../styles/assets/images/brands/12.png"
                  />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    */}
    </>
  );
}
