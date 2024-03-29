import { useState } from "react";
import "../carousel/carousel.scss";
function Carousel({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const next = () =>
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  const prev = () =>
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  console.log(data);
  return (
    <div className="carousel">
      {data ? (
        data.map((item, i) => (
          <img
            key={i}
            className={`carousel-image ${
              currentSlide === i ? "image-active" : ""
            }`}
            src={item}
            alt=""
          />
        ))
      ) : (
        <p>Chargement...</p>
      )}
      <div className="chevrons">
        <button onClick={prev} className="chevron-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="arrow"
          >
            <path
              fill="currentColor"
              d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"
            />
          </svg>
        </button>
        <button onClick={next} className="chevron-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="arrow"
          >
            <path
              fill="currentColor"
              d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Carousel;
