import React from "react";

const ListingDetailPage = () => {
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

              <div class="row">
                <div class="col-sm-6">
                  <form
                    class="form-inline"
                    action="{% url 'auctions:place_bid' listing.id %}"
                    method="post">
                    <div class="form-group mb-2 pl-0 pr-2">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Place Bid"
                        style="width: 110px;"
                        name="bid"
                      />
                    </div>
                    <button type="submit" class="btn btn-outline-success mb-2">
                      Bid
                    </button>
                  </form>
                </div>

                <div class="col-sm-6 float-right pr-0">
                  <a
                    href="{% url 'auctions:buy_now' listing.id %}"
                    class="btn btn-outline-success mr-2">
                    Buy Now
                  </a>
                  <a
                    href="{% url 'auctions:buy_now' listing.id %}"
                    class="btn btn-outline-info">
                    Watchlist
                  </a>
                </div>
              </div>

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
