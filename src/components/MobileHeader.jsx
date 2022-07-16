import React from "react";
import { Link } from "react-router-dom";
import Create from "./imagenes/dogCreate.png";
import Like from "./imagenes/like.png";
import About from "./imagenes/about.png";
import style from "./Style/Home.module.css";
import "./Style/MobileHeader.css";
import SearchBar from "./SearchBar";

const MobileHeader = () => {
  return (
    <div className="headerMobile">
    <div className="mobileNav">

    <button className={style.logo}>
            Console.Dog() 🐾
    </button>
    
        <Link to="/favorites">
          {" "}
          <button className={style.btn}>
            {" "}
            <img
              src={Like}
              weight="10px"
              height="40px"
              title="FAVOURITES"
              alt="favorite"
            />{" "}
          </button>
        </Link>
        <Link to="/about">
          {" "}
          <button className={style.aboutBtn}>
            <img
              src={About}
              weight="40px"
              height="40px"
              title="ABOUT"
              alt="about"
            />{" "}
          </button>{" "}
        </Link>
        <div className={style.create}>
          <Link to="/dogs">
            <img
              src={Create}
              weight="40px"
              height="40px"
              title="CREATE DOG"
              alt="create"
            />
          </Link>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default MobileHeader;
