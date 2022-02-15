import React from "react";
import BannerCreator from "../Banners/BannerCreator";

export default function Slider() {
  return (
    <>
      <div className="home-v1-slider home-slider">
        <BannerCreator
          bannerType={"slider"}
          bannerLink={"https://www.google.com/"}
          imageSource={"https://i.ibb.co/CP8gXXf/9-2.jpg"}
          imgHeight={"638px"}
        />
        <br />
        <BannerCreator
          bannerType={"slider slider-2"}
          bannerLink={"https://www.google.com/"}
          imageSource={"https://i.ibb.co/CP8gXXf/9-2.jpg"}
          imgHeight={"638px"}
        />
      </div>
    </>
  );
}
