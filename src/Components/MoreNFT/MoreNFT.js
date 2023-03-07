import "./MoreNFT.css";
import AOS from "aos";
// Photos
import imageOne from "../../Images/sky.png";
import imageTwo from "../../Images/space.png";
import imageThree from "../../Images/girl.png";
import imageFour from "../../Images/moreOne.png";
import imageFive from "../../Images/moreTwo.png";
import imageSix from "../../Images/moreThree.png";
import { useEffect } from "react";

function MoreNFT() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const moreNft = [
    {
      image: `${imageOne}`,
      headOne: "Distant Galaxy",
      imageaAvatar: `${imageFour}`,
      des: "Moon Dance",
    },
    {
      image: `${imageTwo}`,
      headOne: "Life On Edna",
      imageaAvatar: `${imageFive}`,
      des: "Nebula Kid",
    },
    {
      image: `${imageThree}`,
      headOne: "Astro Fiction",
      imageaAvatar: `${imageSix}`,
      des: "Spaceon",
    },
  ];
  return (
    <div className="moreContainer">
      <div className="heading mt-5">
        <h1 data-aos="fade-up-right">Discover More NFTs</h1>
        <div className="paragaraph">
          <p data-aos="fade-up-right">Explore new trending NFTs</p>
          <button
            className="btn"
            style={{
              border: "1px solid #a259ff",
              color: "#a259ff",
            }}
            data-aos="fade-up-left"
          >
            See All
          </button>
        </div>
        <div className="nftcard mt-5">
          {moreNft.map((e) => {
            return (
              <div
                className="cardsnf p-2"
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img src={e.image} alt="" className="nft" />
                <div className="desCard">
                  <h5 className="mt-3">{e.headOne}</h5>
                  <div className="avatarDes mt-3">
                    <img src={e.imageaAvatar} alt="" className="ava" />
                    <p>{e.des}</p>
                  </div>
                  <div className="priceCard mt-3">
                    <div className="price">
                      <p>price</p>
                      <p>1.63 ETH</p>
                    </div>
                    <div className="sales">
                      <p>Highest Bid</p>
                      <p>0.33 wETH</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* nftcards */}
    </div>
  );
}

export default MoreNFT;
