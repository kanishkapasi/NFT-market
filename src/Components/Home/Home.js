import React from "react";
import "./Home.css";
import logoTwo from "../../Images/main.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="homeContainer">
      <div className="home">
        <motion.div
          className="left p-3"
          initial={{
            opacity: 0,
            y: -300,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.6,
          }}
        >
          <h1>DISCOVER </h1>
          <h1>DIGITAL ART &</h1>
          <h1>COLLECT NFTS</h1>
          <p className="mt-4">
            NFT marketplace UI created with Anima for <br /> Figma. Collect, buy
            and sell art from more
            <br /> than 20k NFT artists.
          </p>
          <button className="btn mt-3">Get Started</button>
          <div className="number mt-4">
            <div className="one">
              <h5>240K+</h5>
              <p>Total Sale</p>
            </div>
            <div className="one">
              <h5>100K+</h5>
              <p>Accuation</p>
            </div>
            <div className="one">
              <h5>240K+</h5>
              <p>Artist sales</p>
            </div>
          </div>
        </motion.div>
        <div className="right p-3">
          <motion.img
            src={logoTwo}
            alt=""
            className="mainImage"
            initial={{
              opacity: 0,
              x: -300,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
