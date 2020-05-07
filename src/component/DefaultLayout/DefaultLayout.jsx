import React from "react";
import {Route, Switch , Redirect} from "react-router-dom";
import Navbar from "../Navigation/Navbar/Navbar";
import NavItems from "../Navigation/Navbar/NavItems/NavItems";
import Routes from "../../helper/Routes/Routes";


const switches = (
    <Switch>
        {Routes.map(route => (
            <Route key={route.key} path={route.path} component={route.component} />
        ))}
        <Redirect to={"/home"} />
    </Switch>
);

export default () =>{
    return(
        <div>
            <Navbar navItems={NavItems} activated={"active"}/>
            <div className="mt-5">{switches}</div>
        </div>
    );
}