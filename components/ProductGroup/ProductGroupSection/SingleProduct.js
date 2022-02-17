import React from "react";

export default function SingleProduct({ category }) {
  return (
    <div className="product">
      <div className="yith-wcwl-add-to-wishlist">
        <a href="wishlist.html" rel="nofollow" className="add_to_wishlist">
          Add to Wishlist
        </a>
      </div>
      <a
        href="single-product-fullwidth.html"
        className="woocommerce-LoopProduct-link"
      >
        <img
          src="https://i.ibb.co/5Ggw11D/10-7.jpg"
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
        <h2 className="woocommerce-loop-product__title">{category}</h2>
      </a>
      <div className="hover-area">
        <a
          className="button add_to_cart_button"
          href="cart.html"
          rel="nofollow"
        >
          Add to cart
        </a>
        <a className="add-to-compare-link" href="compare.html">
          Add to compare
        </a>
      </div>
    </div>
  );
}
