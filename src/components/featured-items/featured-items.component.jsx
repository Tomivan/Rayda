import React from "react";
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useGetItemQuery } from "../../services/data";
import "./featured-items.css"

const FeaturedItems = () => {
    const { data, error, isLoading } = useGetItemQuery([])
    return(
        <Box sx={{ p: 1, ml: 5, mt:2, backgroundColor: '#ffffff', width: 1250, borderRadius: '5px' }}>
            <div className="featured-items-top">
                <p>Featured Items</p>
                <Button sx={{border: 1, borderColor: '#d0d5dd', borderRadius: '5px', height: 7, p: 1.5, color: 'black', mt: 2}}>
                    View Action
                </Button>
            </div>
            <div className="featured-items-bottom">
                {error ? (
                <>Oh no, there was an error</>
                ) : isLoading ? (
                <>Loading...</>
                ) : data?.data.map((data) => (
                <Card sx={{ width: 300, mr: 1.5, mb: 2}}>
                    <CardMedia image={data.image} alt="a laptop"></CardMedia>
                    <CardContent>
                        <Typography>
                            {data.name}
                        </Typography>
                        <Typography>
                            {data.title}
                        </Typography>
                        <Typography>
                            Current Bid: {data.bid}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" sx={{border: 1, borderRadius: '5px', height: 7, p: 2, color: '#ffffff', backgroundColor: '#004ccc', width: 300}}>
                            Add to wishlist
                        </Button>
                    </CardActions>
                </Card>
            ))}
            </div>
        </Box>
    )
}

export default FeaturedItems;