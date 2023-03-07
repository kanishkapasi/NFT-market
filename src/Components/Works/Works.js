import "./Works.css";
import AOS from "aos";
// photos
import logoOne from "../../Images/Icon.png";
import logoTwo from "../../Images/Icon (1).png";
import logoThree from "../../Images/Icon (2).png";
import { useEffect } from "react";

function Works() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const icons = [
    {
      image: `${logoOne}`,
      head: "Setup Your wallet",
      description:
        "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      image: `${logoTwo}`,
      head: "Create Collection",
      description:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      image: `${logoThree}`,
      head: "Start Earning",
      description:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <div className="highlightContainer">
      <div className="headingHigh mt-5">
        <h1
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          How It Works
        </h1>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Find out how to get started
        </p>
      </div>
      <div className="details mt-5">
        {icons.map((e) => {
          return (
            <div
              className="detailsCard"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={e.image} alt="" className="highIcon" />
              <h4>{e.head}</h4>
              <p>{e.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
