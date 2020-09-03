import React from "react";

const Bidding = () => {
  return (
    <div class="row">
      <div class="col-sm-6">
        <form class="form-inline">
          <div class="form-group mb-2 pl-0 pr-2">
            <input
              type="number"
              class="form-control"
              placeholder="Place Bid"
              style={{ width: 110 }}
              name="bid"
            />
          </div>
          <button type="submit" class="btn btn-outline-success mb-2 rounded">
            Bid
          </button>
        </form>
      </div>

      <div class="col-sm-6 float-right pr-0">
        <a href="#" class="btn btn-outline-success mr-2 rounded">
          Buy Now
        </a>
        <a href="#" class="btn btn-outline-info rounded">
          Watchlist
        </a>
      </div>
    </div>
  );
};

export default Bidding;
