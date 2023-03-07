import "./Footer.css";
import logo from "../../Images/Storefront.png";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import AOS from "aos";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="footerContainer">
      <div className="footer">
        <div
          className="left"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="logoDiv">
            <img src={logo} alt="" />
            <h3>NFT Market Place</h3>
          </div>
          <p className="mt-3">
            NFT marketplace UI created
            <br /> with Anima for Figma.
          </p>
          <p className="mt-3">Join our commiunity</p>
          <div className="social mt-2">
            <GoMarkGithub className="log" />
            <FaFacebookSquare className="log" />
            <AiFillLinkedin className="log" />
            <BsInstagram className="log" />
          </div>
        </div>
        <div
          className="middle"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h5>Explore</h5>
          <p className="mt-3">Market Place</p>
          <p className="mt-3">Ranking</p>
          <p className="mt-3">Connect a Wallet</p>
        </div>
        <div
          className="right"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h3>Join Our Weekly Digest</h3>
          <p>
            Get exclusive promotions & updates <br />
            Straight to your inbox.
          </p>
          <div className="divSearch">
            <input type="text" placeholder="Search" className="inputF" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
      <p
        className="p-2"
        style={{
          fontSize: "10px",
          textAlign: "center",
        }}
      >
        Ⓒ Created by Kanishka Pasindu...
      </p>
    </div>
  );
}

export default Footer;
