import * as paths from "../Slug/Slug";
import HomePage from "../../component/Pages/HomePage/HomePage";
import FindADonorPage from "../../component/Pages/FindADonorPage/FindADonorPage";
import ContactUsPage from "../../component/Pages/ContactUsPage/ContactUsPage";
import BeADonorPage from "../../component/Pages/BeADonorPage/BeADonorPage";

export default [
    {
        key: "home",
        path: paths.HOME_PATH,
        component: HomePage
    },
    {
        key: "findadonor",
        path: paths.FIND_A_DONOR_PATH,
        component: FindADonorPage
    },
    {
        key: "beadonor",
        path: paths.BE_A_DONOR_PATH,
        component: BeADonorPage
    },
    {
        key: "contactus",
        path: paths.CONTACT_PATH,
        component: ContactUsPage
    }
];