import React from "react";
import PropTypes from "prop-types";

const Listing = props => {
  return (
    <div>
      <h3 class="text-center">{{ heading }}</h3>
      <h3 class="text-center">Active Listings</h3>

      <div class="row">
        <div class="col-sm-6 px-2 listing">
          <div class="card mb-4" style="height: 230px; cursor: pointer;">
            <div class="row">
              <div class="col-md-4">
                <img
                  src="{{ listing.image.url }}"
                  class="card-img"
                  alt="..."
                  style="height: 334px;"
                />
              </div>

              <div class="col-md-8">
                <div class="float-right p-3">
                  <a
                    href="{% url 'auctions:bid' listing.id %}"
                    class="btn btn-danger btn-sm">
                    Closed
                  </a>
                </div>
                <div class="float-right p-3">
                  <a
                    href="{% url 'auctions:bid' listing.id %}"
                    class="btn btn-outline-info btn-sm listing_url"
                    data-expiryTimeSeconds="{{ listing.expiry_date.timestamp }}">
                    Bid
                  </a>
                </div>

                <div class="card-body">
                  <h5 class="card-title">
                    <a
                      href="{% url 'auctions:bid' listing.id %}"
                      style="text-decoration: inherit; color: inherit;">
                      {name}
                    </a>
                  </h5>
                  <p class="card-text">{description}.</p>

                  <p class="card-text">
                    Expired <i>{expiry_date}</i> ago.
                  </p>
                  <p class="card-text">
                    Winning bid was <strong>$ highest bid</strong>
                  </p>
                  <p class="card-text">
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
