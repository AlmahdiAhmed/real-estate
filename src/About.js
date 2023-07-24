import exterior from "./images/about/exterior.jpg";
import kitchen from "./images/about/kitchen.jpg";
import living from "./images/about/living.jpg";
import stairs from "./images/about/stairs.jpg";

const About = () => {
  return (
    <div className="section about" id="about">
      <div className="about-container">
        <div className="img-container">
          <img className="img exterior" src={exterior} alt="exterior" />
          <img className="img kitchen" src={kitchen} alt="kitchen" />
          <img className="img living" src={living} alt="living" />
          <img className="img stairs" src={stairs} alt="stairs" />
        </div>
        <div className="text">
          <h1>about us</h1>
          <p>
            We are a company that connects the world of real estate and finance.
            We provide a complete service for the sale, purchase or rental of
            real estate
          </p>
          <p>
            We have connection to all banks, so we can solve everything under
            one roof. We move forward and offer above standard services
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
