import React, { useEffect, useRef, useState } from "react";
import getProducts from "../../../pages/api/products";

export default function ProductGroupSection() {
  const [categoryTab, setCategoryTab] = useState([]);
  const [products, setProducts] = useState([]);

  const tabLists = [
    {
      groupName: "Android Phones",
      active: true,
      groupId: 1,
    },
    {
      groupName: "IOS Phones",
      active: false,
      groupId: 2,
    },
    {
      groupName: "Tablets",
      active: false,
      groupId: 3,
    },
    {
      groupName: "Accesorries",
      active: false,
      groupId: 4,
    },
  ];

  // Example API
  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  };

  // Render on load
  useEffect(() => {
    fetchProducts();
    setCategoryTab(tabLists);
  }, []);

  //*****  Toggle Active Tab Function
  const toggleActive = (tabName) => {
    let newCategoryTab = [];
    categoryTab.map((tab) => {
      if (tab.groupName === tabName) {
        tab = { ...tab, active: true };
        newCategoryTab.push(tab);
      } else {
        tab = { ...tab, active: false };

        newCategoryTab.push(tab);
      }
    });
    setCategoryTab(newCategoryTab);
  };

  //***** Filter Items
  const filterItems = (tabName) => {
    // logic here
    toggleActive(tabName);
  };

  return (
    <>
      <section className="section-hot-new-arrivals section-products-carousel-tabs techmarket-tabs">
        <div className="section-products-carousel-tabs-wrap">
          <header className="section-header">
            <h2 className="section-title">Cell Phones &amp; Tablets</h2>
            <ul role="tablist" className="nav justify-content-end">
              {categoryTab.map((item) => {
                return (
                  <>
                    <li
                      onClick={() => filterItems(item.groupName)}
                      className="nav-item"
                    >
                      <a
                        className={`nav-link ${
                          item.active === true && "active"
                        }`}
                        href={`/#prouduct-group-${item.groupId}`}
                        data-toggle="tab"
                      >
                        {item.groupName}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </header>
          {/* <!-- .section-header --> */}
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
                            src="assets/images/products/12.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/14.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/6.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/1.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/15.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/7.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/8.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/10.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/16.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/2.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/3.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/4.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/9.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/5.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/11.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/13.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
                    </div>
                  </div>
                  {/* <!-- .woocommerce --> */}
                </div>
                {/* <!-- .container-fluid --> */}
              </div>
              {/* <!-- .products-carousel --> */}
            </div>
            {/* <!-- .tab-pane --> */}
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
                            src="assets/images/products/7.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/15.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/16.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/12.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/10.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/14.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/4.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/6.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/9.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/2.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/3.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/8.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/5.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/13.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*   <!-- /.product-outer --> */}
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
                            src="assets/images/products/11.jpg"
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
                          {/*   <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/1.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
                    </div>
                  </div>
                  {/*  <!-- .woocommerce --> */}
                </div>
                {/* <!-- .container-fluid --> */}
              </div>
              {/* <!-- .products-carousel --> */}
            </div>
            {/* <!-- .tab-pane --> */}
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
                            src="assets/images/products/10.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/2.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/7.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/6.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/12.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/14.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/11.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/13.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/8.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/5.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/4.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/9.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/3.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/16.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/1.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/15.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
                    </div>
                  </div>
                  {/* <!-- .woocommerce --> */}
                </div>
                {/*  <!-- .container-fluid --> */}
              </div>
              {/*  <!-- .products-carousel --> */}
            </div>
            {/* <!-- .tab-pane --> */}
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
                            src="assets/images/products/9.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/10.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/6.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/15.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/5.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/16.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/4.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/1.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/12.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/*  <!-- /.product-outer --> */}
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
                            src="assets/images/products/8.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/2.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/13.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/14.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/7.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/3.jpg"
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
                          {/*  <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
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
                            src="assets/images/products/11.jpg"
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
                          {/* <!-- /.price --> */}
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
                      {/* <!-- /.product-outer --> */}
                    </div>
                  </div>
                  {/* <!-- .woocommerce --> */}
                </div>
                {/* <!-- .container-fluid --> */}
              </div>
              {/* <!-- .products-carousel --> */}
            </div>
            {/*  <!-- .tab-pane --> */}
          </div>
          {/*  <!-- .tab-content --> */}
        </div>
        {/* <!-- .section-products-carousel-tabs-wrap --> */}
      </section>
    </>
  );
}
