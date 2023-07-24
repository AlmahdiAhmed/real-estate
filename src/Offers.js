import large from "./images/offer/large.jpg";
import villa from "./images/offer/villa.jpg";
import garage from "./images/offer/garage.jpg";
import small from "./images/offer/small.jpg";
import compound from "./images/offer/compound.jpg";
import Carousel from "./Carousel";
const Offers = () => {
  return (
    <div className="section offers" id="top-offers">
      <div className="offers-container">
        <div className="text">
          <h1>Top Offers</h1>
          <p>
            Fulfill your career dreams, see our top apartments and houses with
            the best price
          </p>
          <hr />
        </div>
        <div className="carousel">
          <Carousel />
        </div>
      </div>
    </div>
  );
};
export default Offers;
