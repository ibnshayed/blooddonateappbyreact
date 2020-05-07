import React , {useContext, useState} from "react";
import classes from "./BeADonorPage.scss";
import { DonorContext } from "../../../context/DonorContextProvider/DonorContextProvider";
import { useHistory } from "react-router-dom";

export default (props) => {
    const history = useHistory();
    const donorContext = useContext(DonorContext);

    const [donor,setDonor] = useState(props.history.location.state 
                                        ? props.history.location.state : "" );
    console.log(donor);

    const onChangeDonor = (elementName,event) => {
        
        setDonor({...donor,[elementName]:event.target.value});
        console.log(donor);
    }

    const onSubmit = (event) => {        
        event.preventDefault();
        donorContext.saveOrUpdateDonor(donor);
        history.push("/findadonor");
    }

    return (
        <section className="bg-dark py-5 text-center" id="beadonor">
            <div className="container">
                <h1 className="display-2 text-white">Be A Doner</h1>

                <form action="" className="bg-warning mt-5 py-5">
                    <div className="container">
                        <div className="form-group mb-0">
                            <div className="row justify-content-center">
                                <label htmlFor="" className="col-2 col-form-label-lg">Name: </label>
                                <div className="col-8">
                                    <input type="text" className="form-control" placeholder="Name"
                                        onChange={event => onChangeDonor("name",event)}
                                        value={donor.name}/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-0">
                            <div className="row justify-content-center">
                                <label htmlFor="" className="col-2 col-form-label-lg">Email: </label>
                                <div className="col-8">
                                    <input type="email" className="form-control" placeholder="Enter Your Email"
                                        onChange={event => onChangeDonor("email",event)}
                                        value={donor.email}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <div className="row justify-content-center">
                                <label htmlFor="" className="col-2 col-form-label-lg">Phone: </label>
                                <div className="col-8">
                                    <input type="number" className="form-control" placeholder="Phone Or Mobile"
                                        onChange={event => onChangeDonor("phone",event)}
                                        value={donor.phone}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row justify-content-center">
                                <div className="col-2 align-self-center">
                                    <label htmlFor="" className="col-form-label-lg ">Address: </label>
                                </div>
                                <div className="col-8">
                                    <textarea className="form-control" name="" id="" cols="30" rows="5" placeholder="Address" onChange={event => onChangeDonor("address",event)}value={donor.address}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <div className="row justify-content-center">
                                <div className="col-2 align-self-center">
                                    <label htmlFor="" className="col-form-label-lg ">Blood Group*: </label>
                                </div>
                                <div className="col-8">
                                    <select name="" id="" className="form-control" onChange={event => onChangeDonor("bloodType",event)} value={donor.bloodType}>
                                        <option value="Select None">Select None</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                            <div className="row justify-content-center">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    
                                    <input type="submit" value="Submit" className="btn btn-block btn-primary"
                                        onClick={event => onSubmit(event)}
                                    />
                                </div>
                            </div>
                    </div>
                </form>
            </div>
        </section>
    )
}