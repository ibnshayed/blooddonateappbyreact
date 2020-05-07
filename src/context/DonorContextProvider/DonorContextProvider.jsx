import React, {createContext, useState} from "react";
import axios from "axios";

export const DonorContext = createContext();
export default ({children}) => {

    const [donors, setDonors] = useState(null);
    const [donor, setDonor] = useState(null);

    const getAllDonors = async () =>{
      try {
          const response = await axios.get("http://localhost:8080/api/donor/all");
          setDonors(response.data);
      }catch (error) {
          console.log(error);
      }
    };
    const getDonorById = async (id) =>{
        try {
            const response = await axios.get(`http://localhost:8080/api/donor/${id}`);
            setDonor(response.data);
            console.log(response.data);
        }catch (error) {
            console.log(error);
        }
    };

    const deleteDonorById = async (id) =>{
        try {
            await axios.delete(`http://localhost:8080/api/donor/${id}`);
            setDonors(donors.filter(e => e.id !== id));
        }catch (error) {
            console.log(error);
        }
    };

    const saveOrUpdateDonor = async (data) =>{
        try {
            const response = await axios.post(`http://localhost:8080/api/donor/`,data);
        } catch (error) {
            window.alert("Donor is not created");
            console.log(error);
        }
    }

    return(

        <DonorContext.Provider
            value={{
                donors,
                donor,
                getAllDonors,
                getDonorById,
                deleteDonorById,
                saveOrUpdateDonor
            }}>
            {children}
        </DonorContext.Provider>
    );
};