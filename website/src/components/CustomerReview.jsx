import { Box, Typography } from '@mui/material';
import Slider from '../widgets/Slider';
import CardSlider from '../widgets/CardSlider';
import React, { forwardRef } from 'react';
import theme from '../utils/themes';
import colors from '../utils/colors';


const CustomerReview = forwardRef((props, ref) => {
    const {mediaQuery, language, t} = props;

    return(
        <Box
            width="100%"
            display="flex"
            backgroundColor={colors.fadedbluey}
            //margin="1rem"
            //sx={{padding: (mediaQuery ? '1.5rem' : '1rem')}}
            //border="1px solid black"
            justifyContent="center"
            ref={ref}
            paddingBottom="1rem"
        >
            <Box
                width="100%"
                //backgroundColor="lightgreen"
                padding="1rem 0"
                //border="1px solid black"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                flexDirection="column"
            >
                <Typography
                    variant={(mediaQuery) ? "h2" : "h2P"}
                    margin="1rem 0"
                    sx={{textAlign: "center"}}
                >
                    {t('customerReviews')}
                </Typography>
                {
                    (mediaQuery ? 
                        
                        <Slider language={language}></Slider>
                        
                        :
                        <Box
                            width="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding="1rem"
                            height="500px"
                            overflow="hidden"
                        >
                            <CardSlider language={language} mediaQuery={mediaQuery}></CardSlider>
                        </Box>

                    )
                }
            </Box>
        </Box>
    )
})

export default CustomerReview;