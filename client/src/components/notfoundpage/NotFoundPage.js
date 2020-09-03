import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./NotFoundPage.css";

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <>
      <div id="background"></div>
      <div className="top text-center pb-4">
        <h1>404</h1>
        <h3>page not found</h3>
      </div>
      <div className="container-404">
        <div className="ghost-copy">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        <div className="ghost">
          <div className="face">
            <div className="eye"></div>
            <div className="eye-right"></div>
            <div className="mouth"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className="bottom text-center">
        <h5>Oops, seems this page is not available!</h5>
        <div className="center"></div>
        <div className="buttons">
          <button
            className="btn btn-outline-warning rounded mr-3"
            onClick={() => {
              history.goBack();
            }}>
            Back
          </button>
          <button className="btn btn-outline-success rounded">
            <Link to="" className="no-style">
              Home
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
