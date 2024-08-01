import { Box, Typography, Rating, Snackbar, Button } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React from "react";
import axios from "axios";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';


const Flavors = ({ flavor, mediaQuery, t }) => {

    const [flavors, setFlavors] = useState([]);
    const [userRatings, setUserRatings] = useState({});

    useEffect(() => {
        const fetchFlavors = async () => {
            try{
                const response = await axios.get('http://localhost:3001/flavors');
                setFlavors(response.data);
            }catch(error){
                console.error("Error fetching flavors", error);
            }
        }
        fetchFlavors();
    }, []);

    useEffect(() => {
        const savedRatings = JSON.parse(localStorage.getItem('userRatings'));
        if (savedRatings) {
            setUserRatings(savedRatings);
        }
    }, []);

    const handleRating = async (flavorId, rating) => {
        if(!userRatings[flavorId]){
            const updatedRatings = {...userRatings, [flavorId]: rating};
            setUserRatings(updatedRatings);
            localStorage.setItem('userRatings', JSON.stringify(updatedRatings));

            try{
                await axios.post('http://localhost:3001/rate', {flavorId, rating: rating});
                const response = await axios.get('http://localhost:3001/flavors');
                setFlavors(response.data);
            }catch(error){
                console.error("Error rating flavor", error);
            }
        }else{
            setOpen(true);
        }
    }

    const [open, setOpen] = React.useState(false);

  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Box>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );

    return (
        <Box
            width="100%"
            display="flex"
            backgroundColor="lightblue"
            margin="1rem"
            sx={{padding: (mediaQuery ? '1.5rem' : '1rem')}}
            border="1px solid black"
            justifyContent="center"
        >
            <Box
                width="90%"
                backgroundColor="lightgreen"
                padding="1rem"
                border="1px solid black"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                flexDirection="column"
            >
                
                <Typography
                    variant="h1"
                    fontWeight="350"
                    margin="1rem 0"
                    sx={(
                        mediaQuery ? {
                            fontSize: '2rem',
                        } : {
                            fontSize: '1.5rem',
                        }
                    )}
                >{t("flavors")}</Typography>
                <Box
                    display="flex"
                    justifyContent="space-around"
                    width="100%"
                    sx={{flexWrap: 'wrap'}}
                >
                    {flavors.map((flavor) => (
                        <Box key={flavor._id} mb={2}
                            width={(mediaQuery ? '30%' : '45%')}
                            minWidth="125px"
                            maxWidth="200px"
                            padding={(mediaQuery ? '1rem' : '0rem')}
                            border="1px solid black"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <img src={`${process.env.PUBLIC_URL}/img/${flavor.name}.jpg`} alt={flavor.name}
                                style={{width: (mediaQuery ? "75%":"55%"), height: 'auto', maxWidth: '200px', borderRadius: '50%'}}
                            /> 
                            <Typography variant="h6">{flavor.name}</Typography>
                            <Box
                                display="flex"
                                alignItems="center"
                                
                                justifyContent="center"
                            >
                                <StarBorderOutlinedIcon sx={{marginRight:"0.5rem"}}/>
                                <Typography>{(flavor.ratings.reduce((a, b) => a + b, 0) / flavor.ratings.length).toFixed(1)} Review</Typography>
                            </Box>
                            
                            <Rating
                                precision={0.5}
                                value={flavor.ratings.reduce((a, b) => a + b, 0) / flavor.ratings.length}
                                onChange={(event, newValue) => handleRating(flavor._id, newValue)}
                            />
                        </Box>
                    ))}
                </Box>
                <Typography>
                    {t("rateUs")}
                </Typography>
            </Box>

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={t("alreadyRated")}
                action={action}
            />
        </Box>
    )
}

export default Flavors;