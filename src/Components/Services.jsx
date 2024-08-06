import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assests/3.jpg";
import img2 from "../Assests/4.jpg";
import img3 from "../Assests/api.png";
import img4 from "../Assests/cloud.png";
import img5 from "../Assests/data-management.png";
import img6 from "../Assests/Security.png";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        // showStatus={false}
        showArrows={false}
        // showThumbs={false}
        interval={2000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">API Integration</p>
        </div>
        <div>
          <img src={img4} alt="Item4" />
          <p className="legend">Cloud Services</p>
        </div>
        <div>
          <img src={img5} alt="Item5" />
          <p className="legend">Data Management</p>
        </div>
        <div>
          <img src={img6} alt="Item6" />
          <p className="legend">Security Services</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;