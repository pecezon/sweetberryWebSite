import { Box, Typography } from "@mui/material";
import colors from "../utils/colors";

const OpeningHours = ({mediaQuery, t}) => {
    const schedule = [
        { day: 'monday', hours: '9:00 AM - 9:00 PM' },
        { day: 'tuesday', hours: '9:00 AM - 9:00 PM' },
        { day: 'wednesday', hours: '9:00 AM - 9:00 PM' },
        { day: 'thursday', hours: '9:00 AM - 9:00 PM' },
        { day: 'friday', hours: '9:00 AM - 9:00 PM' },
        { day: 'saturday', hours: '9:00 AM - 9:00 PM' },
        { day: 'sunday', hours: '9:00 AM - 9:00 PM' },
    ];

    return(
        <Box
            width="100%"
            display="flex"
            backgroundColor={colors.fadedpinky}
            //margin="1rem"
            //sx={{padding: (mediaQuery ? '1.5rem' : '1rem')}}
            //border="1px solid black"
            justifyContent="center"
        >
            <Box
                width="90%"
                //backgroundColor="lightgreen"
                padding="1rem"
                //border="1px solid black"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                sx={{flexDirection: (mediaQuery ? 'row' : 'column-reverse')}}
            >

                <Box
                    sx={{
                        width: (mediaQuery ? '45%' : '90%'),
                        margin: (mediaQuery ? "0" : "1rem 0")
                    }}
                    //backgroundColor="lightgray"
                    padding="1rem"
                    //border="1px solid black"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={`${process.env.PUBLIC_URL}/img/collage.png`} alt="Nieve" 
                        style={{ width: (mediaQuery ? "70%" : "80%"), height: 'auto', maxWidth: "600px"}}
                    />
                </Box>

                <Box
                    sx={{
                        width: (mediaQuery ? '45%' : '90%'),
                        margin: (mediaQuery ? "0" : "1rem 0"),
                    }}
                    //backgroundColor="lightpink"
                    padding="1rem"
                    //border="1px solid black"
                    height={(mediaQuery ? '95%' : 'auto')}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Typography margin="2rem" variant={(mediaQuery)?"h2":"h2P"}>{t('hours')}</Typography>
                    <Box 
                    sx={{
                        width: (mediaQuery ? '100%' : '70%'),
                        padding: '2rem',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}
                    >
                    {schedule.map((day, index) => (
                        <Box key={index} display="flex" justifyContent="space-between" mb={1}>
                        <Typography variant={(mediaQuery)?"body1":"body1P"}>{t(day.day)}</Typography>
                        <Typography variant={(mediaQuery)?"body1":"body1P"}>{day.hours}</Typography>
                        </Box>
                    ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OpeningHours;