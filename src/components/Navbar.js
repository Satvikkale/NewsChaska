import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsChaska{" "}
          </Link>
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
    </div>
  );
};

export default Navbar;
