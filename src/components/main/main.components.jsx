import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Gradient from "../../assets/gradient.svg";
import Content from "../../assets/content.svg";
import './main.css';

const Main = () => {
    return(
        <Box sx={{ p: 1, ml: 5, backgroundColor: '#ffffff', width: 1250, borderRadius: '5px' }}>
            <img src={Gradient} alt='' className="gradient" />
            <div className="start">
                <div className="left-side">
                    <img src={Content} alt='' className="content" />
                    <div className="center">
                        <p>Starts in: 3 days : 2 hours : 24 minutes </p>
                        <div className="below">
                            <span className="not-live">Not Live</span>
                            <p>Layers Action</p>
                        </div>
                    </div>
                </div>
                <Button sx={{border: 1, borderColor: '#d0d5dd', color: 'black', borderRadius: '5px', height: 7, p: 1.5, mt: 3}}>
                    Accept Invite
                </Button>
            </div>
        </Box>
    )
}

export default Main;