import React from "react";
import BannerCreator from "./BannerCreator";

export default function Banners() {
  // image source
  const imgFullWidth = "https://i.ibb.co/VxXnyxS/full-width.png";
  const img32 = "https://i.ibb.co/r0PQJ2W/3-2.jpg";
  const img33 = "https://i.ibb.co/0n1Hmxv/3-3.jpg";

  return (
    <>
      <BannerCreator
        bannerType={"full-width-banner"}
        bannerLink={"https://www.google.com/"}
        imageSource={imgFullWidth}
        imgHeight={"236px"}
      />
      <div className="banners">
        <div className="row">
          <BannerCreator
            bannerType={"banner-long"}
            bannerLink={"https://www.google.com/"}
            imageSource={"https://i.ibb.co/r0PQJ2W/3-2.jpg"}
            imgHeight={"259px"}
          />

          <BannerCreator
            bannerType={"banner-short"}
            bannerLink={"https://www.google.com/"}
            imageSource={"https://i.ibb.co/0n1Hmxv/3-3.jpg"}
            imgHeight={"259px"}
          />
        </div>
      </div>
    </>
  );
}
