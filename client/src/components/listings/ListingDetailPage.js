import React from "react";

import Bidding from "./Bidding";

const ListingDetailPage = () => {
  const { title, description, start_price, expiry_date } = 0;
  return (
    <div class="card">
      <div class="card-body p-0">
        <div class="col-md-6 float-left"></div>
        <div class="col-md-6 float-right px-0">
          <div class="card">
            <div class="card-header">
              <h2>{title}</h2>
            </div>
            <div class="card-body">
              <p>
                <span class="text-dark">Description</span>:<br />
                <em class="text-secondary">{description}</em>
              </p>
              <p>
                Starting Price:{" "}
                <span class="font-weight-bold">${start_price}</span>
              </p>
              <p>
                Winning Bid:{" "}
                <span class="font-weight-bold">$ highest_bid </span>
              </p>
              <p class="card-text pt-3">
                Expired <i class="font-weight-bold">{expiry_date}</i> ago.
              </p>
              <p>
                Current Bid: <span class="font-weight-bold">$ highest bid</span>
              </p>
              <Bidding />
              <p class="card-text pt-3">
                Expires in <i class="font-weight-bold">{expiry_date}</i>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailPage;
