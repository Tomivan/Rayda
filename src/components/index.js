import React from "react";
import Topnav from "../components/topnav/topnav.component";
import Main from "./main/main.components";

const Page = () => {
    return(
        <div className="page">
            <Topnav />
            <Main />
        </div>
    )
}

export default Page;