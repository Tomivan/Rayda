import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Gradient from "../../assets/gradient.svg";
import Content from "../../assets/content.svg";
import './main.css';

const Main = () => {
    return(
        <Box>
            <img src={Gradient} alt='' className="gradient" />
            <div className="start">
                <img src={Content} alt='' className="content" />
                <div className="center">
                    <p>Starts in: 3 days : 2 hours : 24 minutes </p>
                    <div className="below">
                        <span className="not-live">Not Live</span>
                        <p>Layers Action</p>
                    </div>
                </div>
                <Button>Accept Invite</Button>
            </div>
        </Box>
    )
}

export default Main;