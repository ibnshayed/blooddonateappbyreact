import React, {Fragment} from "react";
import { useHistory } from "react-router-dom";
import BeADonorPage from "../Pages/BeADonorPage/BeADonorPage";

export default (props) => {
    const history = useHistory();

    return (
        <Fragment>
            <table className="table table-hover">
                <thead className="thead-dark">
                <tr>
                    {
                        props.columns.map((col, i) => (
                            <th key={i}>{col.title}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    props.dataSource.map((data, i) => (
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.bloodType}</td>
                            <td>{data.phone}</td>
                            <td className="btn-group">
                                <button className="btn btn-primary px-3"
                                        onClick={() => props.view(data)}
                                        data-toggle="modal" data-target="#exampleModalCenter">View</button>
                                <button className="btn btn-info px-3" onClick={() => props.update(data)}>Update</button>
                                <button className="btn btn-danger px-3" onClick={() => props.delete(data.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </Fragment>
    );
};