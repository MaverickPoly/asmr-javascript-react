import React, { useState } from "react";

const carouselData = [
  ["Afghanistan", "src/images/afghanistan.jpg"],
  ["Angola", "src/images/angola.jpg"],
  ["Australia", "src/images/australia.jpg"],
  ["China", "src/images/china.png"],
  ["Dubai", "src/images/dubai.png"],
  ["India", "src/images/india.jpg"],
  ["Indonesia", "src/images/indonesia.jpeg"],
  ["Mongolia", "src/images/mongolia.jpg"],
  ["New Zealand", "src/images/new-zealand.jpg"],
  ["Turkey", "src/images/turkey.jpg"],
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(3);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="carousel-container">
      <img
        src={carouselData[currentIndex][1]}
        alt={carouselData[currentIndex][0]}
        className="image"
      />
      <h3 className="title">{carouselData[currentIndex][0]}</h3>
      <button className="btn prev" onClick={prevImage}>
        ⟪
      </button>
      <button className="btn next" onClick={nextImage}>
        ⟫
      </button>
    </div>
  );
};

export default Carousel;
