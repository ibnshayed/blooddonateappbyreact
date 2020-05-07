import React from "react";
import classes from "./HomePageBanner.scss";

export default () =>{
    return(
      <section className="" id="home_page_banner">
          <div className="container">
              <div className="row text-center">
                  <div className="col">
                      <h1 className="display-1 text-white">Be A Donor</h1>
                      <h2 className="display-4 text-white">Save The World</h2>
                      <a href="/beadonor" className="btn btn-primary btn-lg text-uppercase px-5 py-3 mt-3">Be A Donor</a>
                  </div>
              </div>
          </div>
      </section>
    );
}