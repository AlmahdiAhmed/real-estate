import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./Data";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 867,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="carousel-container">
      {Data.map((item) => {
        const { img, title, price, id } = item;
        return (
          <div className="item-container" key={id}>
            <div className="img">
              <img src={img} alt={title} />
            </div>
            <div className="text">
              <h1>{title}</h1>
              <span>
                $ <span>{price}</span>
              </span>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default Carousel;
