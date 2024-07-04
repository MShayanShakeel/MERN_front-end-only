import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import hamburger from "../../images/burgettemopp-removebg-preview.png";

const Navbar = () => {
  const navigate = useNavigate();
  const validUser = localStorage.getItem("user");
  const validToken = localStorage.getItem("token");
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/singup");
  };
  return (
    <>
      <div>
        <div className="Navbar-second row">
          <div className="left-postion web-responcive col-12">
            {" "}
            <span>
              <Link to={"/"}>
                <h2 style={{ cursor: "pointer" }}>Logo</h2>
              </Link>
            </span>
            <span>
              <ul>
                <Link to={"/"}>
                  <li>EVERYTHING</li>
                </Link>
                <Link to={"/Products"}>
                  <li>ALL PRODUCTS</li>
                </Link>
                <Link to={"/Offers"}>
                  <li>Offers</li>
                </Link>
                <Link to={"/AddProduct"}>
                  <li>AddProduct</li>
                </Link>
              </ul>
            </span>
            <span className="Right-postion">
              <div>
                <Link to={"/About"}>
                  <span className="about-us">About Us</span>
                </Link>
              </div>
              <div>
                <Link to={"/Contact"}>
                  <span className="about-us">Contact Us</span>
                </Link>
              </div>

              {validUser || validToken ? (
                <button onClick={handleLogOut}>LogOut</button>
              ) : (
                <>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                  <Link to="/singup">
                    <button>Sing Up</button>
                  </Link>
                </>
              )}
            </span>
          </div>
          {/* MOBILE RESPONCIVE NAVBAR START */}
          <div className="left-postion mobile-responcive col-12">
            <span>
              {toggle ? (
                <h2 style={{ cursor: "pointer" }} onClick={handleToggle}>
                  Logo
                </h2>
              ) : (
                <img src={hamburger} alt="hamburger" onClick={handleToggle} />
              )}
            </span>
            {toggle && (
              <span>
                <ul>
                  <Link to={"/"}>
                    <li>EVERYTHING</li>
                  </Link>
                  <Link to={"/Products"}>
                    <li>ALL PRODUCTS</li>
                  </Link>
                  <Link to={"/Offers"}>
                    <li>Offers</li>
                  </Link>
                  <Link to={"/AddProduct"}>
                    <li>AddProduct</li>
                  </Link>

                  <Link to={"/About"}>
                    <li>About Us</li>
                  </Link>

                  <Link to={"/Contact"}>
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </span>
            )}
            <span className="Right-postion">
              {validUser || validToken ? (
                <button onClick={handleLogOut}>LogOut</button>
              ) : (
                <>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                  <Link to="/singup">
                    <button>Sing Up</button>
                  </Link>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
