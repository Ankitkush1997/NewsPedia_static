import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as News } from "../../assets/news.svg";
import SigningText from "../SigningText/SigningText";


import "./navbar.styles.css";
const Navbar = () => {
  return (
    <div style={{ postion: "fixed" }}>
      <div style={{ height: "60px" }}>
        <div
          className="nav-area"
          style={{
            position: "fixed",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="herolal"
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              fontSize: "xx-large",
            }}
          >
            <div
              className="tora"
              style={{ width: "42px", margin: "8px", marginTop: "15px" }}
            >
              <News />
            </div>
            NewsPedia
          </div>
          <input type="checkbox" id="box" />
          <label htmlFor="box" className="btn-area">
            <i className="fa fa-bars"></i>
          </label>
          <ul>
            <li >
              <Link to="/general">General</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="/health">Health</Link>
            </li>
            <li>
              <Link to="/science">Science</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </div>
      <SigningText />
    </div>
  );
};

export default Navbar;
