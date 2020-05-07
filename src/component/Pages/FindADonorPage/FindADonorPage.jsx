import React, {Fragment, useContext, useEffect, useState} from "react";
import "./FindADonorPage.scss";
import Table from "../../Table/Table";
import {DonorContext} from "../../../context/DonorContextProvider/DonorContextProvider";
import { useHistory } from "react-router";

export default () => {

    const donorContext = useContext(DonorContext);
    const [donor,setDonor] = useState(null);
    const history = useHistory();

    useEffect(() => {
        donorContext.getAllDonors();
    }, []);

    const deleteDonor = (id) => {
        donorContext.deleteDonorById(id);
    }

    const onViewDonor = (data) => {
        setDonor(data);
    }

    const updateDonor = (data) => {
        history.push("/beadonor",data);
    }



    const viewDonorDetails = (
        <Fragment>
            <div className="modal fade text-left" id="exampleModalCenter" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Donor Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                donor ?(
                                    <Fragment>
                                    <div className="row">
                                        <div className="col-4">Name:</div>
                                        <div className="col-8">{donor.name}</div>
                                    </div>
                                        <div className="row">
                                            <div className="col-4">Blood Group:</div>
                                            <div className="col-8">{donor.bloodType}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">Email:</div>
                                            <div className="col-8">{donor.email}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">Address:</div>
                                            <div className="col-8">{donor.address}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">Phone or Mobile:</div>
                                            <div className="col-8">{donor.phone}</div>
                                        </div>
                                    </Fragment>
                                ): null
                            }


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

    return (
        <section className="bg-secondary py-5 text-center" id="findadonor">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-2 text-white">Find A Doner</h1>

                        <div className="bg-white mt-5">
                            {
                                donorContext.donors ?
                                    <Table columns={donorColumn}
                                           dataSource={donorContext.donors}
                                           view={onViewDonor}
                                           update={updateDonor}
                                           delete={deleteDonor}/>
                                    : null
                            }

                            {viewDonorDetails}

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
};

const donorColumn = [
    {
        key: "name",
        title: "Name",
        dataIndex: "name"
    },
    {
        key: "bloodType",
        title: "Blood Group",
        dataIndex: "bloodType"
    },
    {
        key: "phone",
        title: "Phone",
        dataIndex: "phone"
    },
    {
        key: "action",
        title: "Action"
    }

];