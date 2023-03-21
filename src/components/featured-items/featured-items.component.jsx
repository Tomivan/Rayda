import React from "react";
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./featured-items.css"

const FeaturedItems = () => {
    return(
        <Box>
            <div className="featured-items-top">
                <p>Featured Items</p>
                <Button>View Action</Button>
            </div>
            <Card>
                <CardMedia image=""></CardMedia>
                <CardContent>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography>
                        Current Bid: 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Add to wishlist</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default FeaturedItems;