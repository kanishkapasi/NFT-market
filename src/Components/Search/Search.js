import "./Search.css";
import logo from "../../Images/search.png";
import AOS from "aos";
import { useEffect } from "react";

function Search() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="searchContainer">
      <div className="search mt-5">
        <img
          src={logo}
          alt=""
          className="searchIcon"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <div
          className="searchItem"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 className="m">
            Join Our Weekly <br /> Digest
          </h1>
          <p>
            Get exclusive promotions & updates <br /> Straight to your inbox.
          </p>
          <div className="searchBox">
            <input type="text" placeholder="Search" className="in" />
            <button className="btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
