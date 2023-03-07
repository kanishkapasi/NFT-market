import "./Catergorise.css";
import AOS from "aos";
// Photos
import imageOne from "../../Images/art.png";
import imageTwo from "../../Images/Collectibles.png";
import imageThree from "../../Images/music.png";
import imageFour from "../../Images/photography.png";
import imageFive from "../../Images/vidieo.png";
import imageSix from "../../Images/utility.png";
import imageSeven from "../../Images/sports.png";
import imageEight from "../../Images/virtual.png";
import { useEffect } from "react";

function Catergorise() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const browseCat = [
    {
      image: `${imageOne}`,
      description: "ART",
    },
    {
      image: `${imageTwo}`,
      description: "Colletibles",
    },
    {
      image: `${imageThree}`,
      description: "Music",
    },
    {
      image: `${imageFour}`,
      description: "Photography",
    },
    {
      image: `${imageFive}`,
      description: "Video",
    },
    {
      image: `${imageSix}`,
      description: "Utility",
    },
    {
      image: `${imageSeven}`,
      description: "Sports",
    },
    {
      image: `${imageEight}`,
      description: "Virtual World",
    },
  ];
  return (
    <div className="catContainer">
      <h1 className="text-light text-center mt-4" data-aos="zoom-in">
        Browse Catergorise
      </h1>
      <div className="browse mt-4">
        {browseCat.map((e) => {
          return (
            <div
              className="bCards mt-5"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={e.image} alt="" />
              <div className="description">
                <h4>{e.description}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Catergorise;
