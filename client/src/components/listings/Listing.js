import React from "react";
import PropTypes from "prop-types";

const Listing = props => {
  return (
    <div>
      <h3 className="text-center">{{ heading }}</h3>
      <h3 className="text-center">Active Listings</h3>

      <div className="row">
        <div className="col-sm-6 px-2 listing">
          <div className="card mb-4" style="height: 230px; cursor: pointer;">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="{{ listing.image.url }}"
                  className="card-img"
                  alt="..."
                  style="height: 334px;"
                />
              </div>

              <div className="col-md-8">
                <div className="float-right p-3">
                  <a
                    href="{% url 'auctions:bid' listing.id %}"
                    className="btn btn-danger btn-sm">
                    Closed
                  </a>
                </div>
                <div className="float-right p-3">
                  <a
                    href="{% url 'auctions:bid' listing.id %}"
                    className="btn btn-outline-info btn-sm listing_url"
                    data-expiryTimeSeconds="{{ listing.expiry_date.timestamp }}">
                    Bid
                  </a>
                </div>

                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="{% url 'auctions:bid' listing.id %}"
                      style="text-decoration: inherit; color: inherit;">
                      {name}
                    </a>
                  </h5>
                  <p className="card-text">{description}.</p>

                  <p className="card-text">
                    Expired <i>{expiry_date}</i> ago.
                  </p>
                  <p className="card-text">
                    Winning bid was <strong>$ highest bid</strong>
                  </p>
                  <p className="card-text">
                    Expires in <i>{expiry_date}</i>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Listing.propTypes = {};

export default Listing;
