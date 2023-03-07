import avatarOne from "../../Images/Avatar.png";
import avatarTwo from "../../Images/Avatar (1).png";
import avatarThree from "../../Images/Avatar (2).png";
import avatarFour from "../../Images/Avatar (3).png";
import avatarFive from "../../Images/Avatar (4).png";
import avatarSix from "../../Images/Avatar (5).png";
import avatarSeven from "../../Images/Avatar (6).png";
import avatarEight from "../../Images/Avatar (7).png";
import avatarNine from "../../Images/Avatar (8).png";
import avatarTen from "../../Images/Avatar (9).png";
import avatarEleven from "../../Images/Avatar (10).png";
import avatarTwelve from "../../Images/Avatar (11).png";
// Css File
import "./TopCreators.css";
import AOS from "aos";
import { useEffect } from "react";

function TopCreaters() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  const avatars = [
    {
      image: `${avatarOne}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarTwo}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarThree}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarFour}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarFive}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarSix}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarSeven}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarEight}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarNine}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarTen}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarEleven}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
    {
      image: `${avatarTwelve}`,
      name: "Keepith real",
      sales: "Total Sales: 34.53 ETH",
    },
  ];
  return (
    <div className="creatorsContainer">
      <div className="heading mt-4">
        <h1 data-aos="fade-up-right">Top Creators</h1>
        <div className="paragaraph">
          <p data-aos="fade-up-right">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
          <button
            className="btn"
            style={{
              border: "1px solid #a259ff",
              color: "#a259ff",
            }}
            data-aos="fade-up-left"
          >
            View Ranking
          </button>
        </div>
      </div>
      {/* creators avatar */}
      <div className="avatar">
        {avatars.map((e) => {
          return (
            <div className="card mt-4" data-aos="fade-up">
              <img
                src={e.image}
                alt=""
                style={{
                  width: "70px",
                  height: "70px",
                }}
                className="avatarImage"
              />
              <h6>{e.name}</h6>
              <p>{e.sales}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopCreaters;
