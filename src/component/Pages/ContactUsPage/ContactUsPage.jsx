import React from "react";
import classes from "./ContactUsPage.scss";

export default () => {
    return (
        <section className="bg-dark py-5 text-center" id="contactus">
            <div className="container">
                <h1 className="display-2 text-white">Contact Us</h1>

                <form action="" className="bg-warning mt-5 py-5">
                    <div className="container">
                        <div className="form-group mb-0">
                            <div className="row justify-content-center">
                                <label htmlFor="" className="col-2 col-form-label-lg">Email: </label>
                                <div className="col-8">
                                    <input type="Email" className="form-control" placeholder="Enter Your Email"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row justify-content-center">
                                <div className="col-2 align-self-center">
                                    <label htmlFor="" className="col-form-label-lg ">Message: </label>
                                </div>
                                <div className="col-8">
                                    <textarea className="form-control" name="" id="" cols="30" rows="5" placeholder="Messages"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <input type="submit" value="Send" className="btn btn-block btn-primary"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}