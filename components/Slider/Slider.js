import React from "react";
import BannerCreator from "../Banners/BannerCreator";
import Slider from "react-slick";

export default function SliderComponent() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className="home-v1-slider home-slider">
        <Slider {...settings}>

          <BannerCreator
            bannerType={"slider"}
            bannerLink={"https://www.google.com/"}
            imageSource={"https://i.ibb.co/CP8gXXf/9-2.jpg"}
            imgHeight={"563px"}
          />
          <BannerCreator
            bannerType={"slider"}
            bannerLink={"https://www.google.com/"}
            imageSource={"https://i.ibb.co/CP8gXXf/9-2.jpg"}
            imgHeight={"563px"}
          />
          <BannerCreator
            bannerType={"slider"}
            bannerLink={"https://www.google.com/"}
            imageSource={"https://i.ibb.co/CP8gXXf/9-2.jpg"}
            imgHeight={"563px"}
          />
          <BannerCreator
            bannerType={"slider"}
            bannerLink={"https://www.google.com/"}
            imageSource={"https://i.ibb.co/CP8gXXf/9-2.jpg"}
            imgHeight={"563px"}
          />
        </Slider>
      </div>
    </>
  );
}
