import React from "react";
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import vg from "../Assests/2.webp";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            At our tech company, we pride ourselves on being your go-to solution
            for all the technology challenges you encounter daily. Our mission
            extends beyond simply fixing problems; we strive to enhance
            problem-solving skills, particularly among children. As a leading
            tech firm, we believe in empowering the next generation with the
            tools and knowledge they need to navigate the digital world
            confidently. Our innovative programs and resources are designed to
            foster critical thinking, creativity, and technical proficiency in
            young minds. By integrating fun and interactive learning
            experiences, we make technology accessible and engaging for
            children, helping them develop a strong foundation in
            problem-solving. Whether it's through coding workshops, hands-on
            projects, or educational games, we are dedicated to inspiring and
            equipping the youth with the capabilities to tackle future tech
            challenges. Join us in our mission to cultivate a new generation of
            tech-savvy problem solvers.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
