import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SingleProduct from "./SingleProduct";

export default function ProductGroupSection() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState();

  // **************** Example Fetch API ****************
  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  };

  // **************** Load Products ****************
  useEffect(() => {
    fetchProducts();
  }, []);

  // **************** Set Product Categories ****************
  useEffect(() => {
    const categories = [...new Set(products.map((i) => i.category))];
    setCategories(categories);
    setActiveTab(categories[0]);
  }, [products]);

  // **************** Slider settings ****************

  let settings = {
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section-hot-new-arrivals section-products-carousel-tabs techmarket-tabs">
        <div className="section-products-carousel-tabs-wrap">
          <header className="section-header">
            <h2 className="section-title">Cell Phones &amp; Tablets</h2>
            <ul role="tablist" className="nav justify-content-end">
              {categories.map((item) => {
                return (
                  <>
                    <li
                      onClick={() => {
                        setActiveTab(item);
                      }}
                      className="nav-item"
                    >
                      <Link href={`#${item}`}>
                        <a
                          className={
                            item === activeTab ? "nav-link active" : "nav-link"
                          }
                        >
                          {item}
                        </a>
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </header>
          {/* <!-- .section-header --> */}
          {/**************** Slider  Section ****************/}
          <div className="products-carousel">
            <div className="container-fluid">
              <div className="woocommerce ">
                {/**************** Slider ****************/}
                <Slider {...settings} className="products">
                  {products
                    .filter((p) => p.category === activeTab)
                    .map((product) => {
                      return (
                        <SingleProduct
                          key={product._id}
                          category={product.category}
                        />
                      );
                    })}
                </Slider>
              </div>
            </div>
          </div>
          {/*  <!-- .tab-content --> */}
        </div>
        {/* <!-- .section-products-carousel-tabs-wrap --> */}
      </section>
    </>
  );
}
