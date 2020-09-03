import React from "react";
import PropTypes from "prop-types";

const Listing = ({ listing }) => {
  const {
    id,
    title,
    start_price,
    date_added,
    expiry_date,
    description,
    image,
    user,
    category,
  } = listing;

  return (
    <div className="col-sm-6 px-2 listing">
      <div className="card mb-4" style={{ height: 230, cursor: "pointer" }}>
        <div className="row">
          <div className="col-md-4">
            <img
              src="#"
              className="card-img"
              alt="..."
              style={{ height: 334 }}
            />
          </div>

          <div className="col-md-8">
            <div className="float-right p-3">
              <a href="#" className="btn btn-danger btn-sm rounded">
                Closed
              </a>
            </div>
            <div className="float-right p-3">
              <a
                href="#"
                className="btn btn-outline-info btn-sm listing_url rounded">
                Bid
              </a>
            </div>

            <div className="card-body">
              <h5 className="card-title">
                <a
                  href="#"
                  style={{ textDecoration: "inherit", color: "inherit" }}>
                  {title}
                </a>
              </h5>
              <p className="card-text">{description}.</p>

              <p className="card-text">
                Expired <i>{expiry_date}</i> ago.
              </p>
              <p className="card-text">
                Winning bid was <strong>$ 0</strong>
              </p>
              <p className="card-text">
                Expires in <i>{expiry_date}</i>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Listing.propTypes = {
  listing: PropTypes.object.isRequired,
};

export default Listing;
