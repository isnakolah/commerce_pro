import React from "react";

import Bidding from "./Bidding";

const ListingDetailPage = () => {
  const { title, description, start_price, expiry_date } = 0;
  return (
    <div className="card">
      <div className="card-body p-0">
        <div className="col-md-6 float-left"></div>
        <div className="col-md-6 float-right px-0">
          <div className="card">
            <div className="card-header">
              <h2>{title}</h2>
            </div>
            <div className="card-body">
              <p>
                <span className="text-dark">Description</span>:<br />
                <em className="text-secondary">{description}</em>
              </p>
              <p>
                Starting Price:{" "}
                <span className="font-weight-bold">${start_price}</span>
              </p>
              <p>
                Winning Bid:{" "}
                <span className="font-weight-bold">$ highest_bid </span>
              </p>
              <p className="card-text pt-3">
                Expired <i className="font-weight-bold">{expiry_date}</i> ago.
              </p>
              <p>
                Current Bid:{" "}
                <span className="font-weight-bold">$ highest bid</span>
              </p>
              <Bidding />
              <p className="card-text pt-3">
                Expires in <i className="font-weight-bold">{expiry_date}</i>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailPage;
