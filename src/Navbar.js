import { Link } from "react-scroll";
import { BsBuildingsFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
const Navbar = () => {
  const [linksShow, setLinksShow] = useState(false);

  return (
    <div className="section navbar">
      <nav>
        <div className="logo">
          <Link to="home">
            <BsBuildingsFill />
          </Link>
        </div>
        <div className={`links ${linksShow && "links-show"}`}>
          <div className="link">
            <Link to="home">Home</Link>
          </div>
          <div className="link">
            <Link offset={-50} to="about">
              About Us
            </Link>
          </div>
          <div className="link">
            <Link offset={-40} to="top-offers">
              Top offers
            </Link>
          </div>

          <div className="link contact contact">
            <Link to="contact">Contact Us</Link>
          </div>
        </div>
        <div
          className="nav-icon"
          onClick={() => {
            setLinksShow(!linksShow);
          }}
        >
          <FiMenu />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
