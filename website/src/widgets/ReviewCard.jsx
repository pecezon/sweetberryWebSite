import { Box, Typography, Avatar, useMediaQuery } from "@mui/material";
import theme from "../utils/themes";
import colors from "../utils/colors";


const ReviewCard = ({ review }) => {
    const mediaQuery = useMediaQuery('(min-width:1000px)');

    return(
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            width="95%"
            height="95%"
            backgroundColor={colors.lightorangey}
            padding="1rem"
            border="2px solid black"
            borderRadius="1rem"
            sx={{
                "&:hover": {
                    cursor: 'pointer',
                }
            }}
        >
            <Box
                width="90%"
                height="60%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Typography
                    textAlign="left"
                    sx={{
                        fontSize:(mediaQuery ? '1.25rem' : '0.875rem')
                    }}
                >
                    {review["review"]}
                </Typography>
            </Box>
            <Box
                width="90%"
                height="30%"
                display="flex"
                justifyContent="space-between"
            >
                <Box
                    width="60%"
                    display="flex"
                    justifyContent="center"
                    alignItems='flex-start'
                    flexDirection="column"
                >
                    <Avatar alt={review["name"]} src={`${process.env.PUBLIC_URL}/img/avatar.jpg`} 
                        sx={{
                            width: '50px',
                            height: '50px',
                            marginBottom: '1rem',
                            border: '2px solid black'
                        }}
                    />
                    <Typography
                        variant="h6"
                        fontWeight="semibold"
                        sx={{
                            fontSize:(mediaQuery ? '1.5rem' : '1rem')
                        }}
                        
                    >
                        {review["name"]}
                    </Typography>
                </Box>
                <Box
                    width="40%"
                    display="flex"
                    justifyContent="flex-end"
                    alignItems='center'
                >
                    <img src={`${process.env.PUBLIC_URL}/img/quotes.png`} alt="quotes" 
                        style={{
                            width: (mediaQuery ? '75px' : '50px'),
                            height: (mediaQuery ? '75px' : '50px'),
                        }}
                    />
                </Box>
                    
            </Box>

        </Box>
    )
}

export default ReviewCard;