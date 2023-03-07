import "./Collection.css";
import "aos/dist/aos.css";
import AOS from "aos";
// Dogs Images
import dog from "../../Images/dogMain.png";
import dogOne from "../../Images/dogSecond.png";
import dogTwo from "../../Images/dogThird.png";

// Mushroom Images
import mushOne from "../../Images/mushroomMain.png";
import mushTwo from "../../Images/mushroomSecoind.png";
import mushThree from "../../Images/mushroomsmallMain.png";

// Robos Images
import roboOne from "../../Images/roboMain.png";
import roboTwo from "../../Images/roboSecond.png";
import roboThree from "../../Images/robosmall.png";
import { useEffect } from "react";

function Collection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const dogs = [
    {
      imageOne: `${dog}`,
      imageTwo: `${dogOne}`,
      imageThree: `${dogTwo}`,
    },
  ];

  const mushRooms = [
    {
      imageOne: `${mushOne}`,
      imageTwo: `${mushTwo}`,
      imageThree: `${mushThree}`,
    },
  ];

  const robos = [
    {
      imageOne: `${roboOne}`,
      imageTwo: `${roboTwo}`,
      imageThree: `${roboThree}`,
    },
  ];
  return (
    <div className="collectionContainer">
      <div className="imagesContainer">
        <h2
          data-aos="zoom-in-up"
          style={{
            color: "white",
          }}
        >
          Trending Collection
        </h2>
        <p
          data-aos="zoom-in-up"
          style={{
            color: "white",
          }}
        >
          Checkout our weekly updated trending collection.
        </p>
        <div className="boxes">
          {/* Dogs Boxes */}
          {dogs.map((e) => {
            return (
              <div
                className="dogs mt-5 p-2"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <img src={e.imageOne} alt="" className="icons" />
                <div
                  className="dogSmall mt-3"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img src={e.imageTwo} alt="" className="icons" />
                  <img src={e.imageThree} alt="" className="icons" />
                  <div
                    className="dogBox"
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "#a259ff",
                      borderRadius: "19px",
                      justifyContent: "center",
                      color: "white",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    1025+
                  </div>
                </div>
                <p className="mt-2 text-light">DSGN Animals</p>
              </div>
            );
          })}

          {/* Mushroom boxes */}
          {mushRooms.map((e) => {
            return (
              <div
                className="dogs mt-5 p-2"
                data-aos="fade-down"
                data-aos-duration="2500"
              >
                <img src={e.imageOne} alt="" className="icons" />
                <div
                  className="dogSmall mt-3"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img src={e.imageTwo} alt="" className="icons" />
                  <img src={e.imageThree} alt="" className="icons" />
                  <div
                    className="dogBox"
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "#a259ff",
                      borderRadius: "19px",
                      justifyContent: "center",
                      color: "white",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    1025+
                  </div>
                </div>
                <p className="mt-2 text-light">Magic Mushrooms</p>
              </div>
            );
          })}

          {/* Robo Boxes */}
          {robos.map((e) => {
            return (
              <div
                className="dogs mt-5 p-2"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                <img src={e.imageOne} alt="" className="icons" />
                <div
                  className="dogSmall mt-3"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img src={e.imageTwo} alt="" className="icons" />
                  <img src={e.imageThree} alt="" className="icons" />
                  <div
                    className="dogBox"
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "#a259ff",
                      borderRadius: "19px",
                      justifyContent: "center",
                      color: "white",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    1025+
                  </div>
                </div>
                <p className="mt-2 text-light">Disco Machines</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collection;
