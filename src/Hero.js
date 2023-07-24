import { Link } from "react-scroll";
import img from "./images/hero.jpg";
import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Hero = () => {
  const { ref, inView } = useInView();
  const animate = useAnimation();
  let animateText = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
    },
  };
  useEffect(() => {
    if (inView) {
      animate.start(animateText);
    }
    if (!inView) {
      animate.start({
        x: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div className="section hero" id="home">
      <div className="hero-container">
        <div className="text">
          <motion.h1
            ref={ref}
            variants={animateText}
            initial="hidden"
            animate="visible"
          >
            Modern living for everyone
          </motion.h1>

          <motion.p>
            Get your complete sale, purchase real estate services.
          </motion.p>
          <motion.div className="button-container">
            <Link className="button" to="top-offers" offset={-40}>
              Top Offers
            </Link>
          </motion.div>
        </div>
        <div className="img">
          <img src={img} alt="real estate" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
