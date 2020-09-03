import React, { useState } from "react";

const Bidding = () => {
  const [bid, setBid] = useState(null);

  const onChange = ({ target }) => {
    setBid(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <form className="form-inline" onSubmit={onSubmit}>
          <div className="form-group mb-2 pl-0 pr-2">
            <input
              type="number"
              className="form-control"
              placeholder="Place Bid"
              style={{ width: 110 }}
              name="bid"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-success mb-2 rounded">
            Bid
          </button>
        </form>
      </div>

      <div className="col-sm-6 float-right pr-0">
        <a href="#" className="btn btn-outline-success mr-2 rounded">
          Buy Now
        </a>
        <a href="#" className="btn btn-outline-info rounded">
          Watchlist
        </a>
      </div>
    </div>
  );
};

export default Bidding;
