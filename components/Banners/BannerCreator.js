import React from "react";

export default function BannerCreator(props) {
  const { bannerType, bannerLink, imageSource, imgHeight } = props;

  const commonStyles = {
    backgroundSize: "cover",
    backgroundPosition: `center center`,
  };
  return (
    <>
      <div className={`banner ${bannerType}`}>
        <a href={`${bannerLink}`}>
          <div
            style={{
              ...commonStyles,
              backgroundImage: `url(${imageSource})`,
              height: `${imgHeight}`,
            }}
            className="banner-bg"
          ></div>
        </a>
      </div>
    </>
  );
}
