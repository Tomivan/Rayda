import React from "react";
import Topnav from "../components/topnav/topnav.component";
import FeaturedItems from "./featured-items/featured-items.component";
import Main from "./main/main.components";

const Page = () => {
    return(
        <div className="page">
            <Topnav />
            <Main />
            <FeaturedItems />
        </div>
    )
}

export default Page;