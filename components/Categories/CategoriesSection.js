import React, { useRef } from "react";
import Slider from "react-slick";
import CategoryItem from "./CategoryItem";

// Font awesome
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

/* ******************* Main function ******************* */
export default function CategoriesSection() {
  const sliderRef = useRef(null);

  // ******** Common styles of Prev and Next buttons
  const arrowStyles = {
    padding: "4px",
  };

  // ******** Next Button
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="slick-arrow"
          style={arrowStyles}
        />
      </div>
    );
  };

  // ******** Previous Button
  const PrevBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="slick-arrow"
          style={arrowStyles}
        />
      </div>
    );
  };

  // ******** Slider settings

  let settings = {
    infinite: false,
    dot: true,
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
      <section className="section-products-carousel" id="homev12-carousel-1">
        {/******** Header ********/}
        <header className="section-header">
          <h2 className="section-title">Featured Categories</h2>
          <div className="slider_control_options">
            <div className="d-flex">
              <PrevBtn onClick={() => sliderRef.current.slickPrev()} />
              <NextBtn onClick={() => sliderRef.current.slickNext()} />
            </div>
          </div>
        </header>

        {/******** Slider  Section ********/}
        <div
          className="products-carousel"
          id="new-arrival-carousel"
          data-ride="tm-slick-carousel"
          data-wrap=".products"
          data-slick='{"infinite":false,"slidesToShow":8,"slidesToScroll":8,"dots":true,"arrows":true,"prevArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-left\"&gt;&lt;\/i&gt;&lt;\/a&gt;","nextArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-right\"&gt;&lt;\/i&gt;&lt;\/a&gt;","appendArrows":"#homev12-carousel-1 .custom-slick-nav","responsive":[{"breakpoint":650,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":780,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}},{"breakpoint":1400,"settings":{"slidesToShow":6,"slidesToScroll":6}}]}'
        >
          <div className="container-fluid">
            <div className="woocommerce ">
              {/******** Slider ********/}
              <Slider ref={sliderRef} {...settings} className="products">
                {Array(90)
                  .fill("")
                  .map((_, item) => {
                    return (
                      <>
                        <CategoryItem
                          key={Array[item]}
                          link={"https://www.google.com/"}
                          imageSource={"https://i.ibb.co/5Ggw11D/10-7.jpg"}
                          categoryTitle={"Category"}
                        />
                      </>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
