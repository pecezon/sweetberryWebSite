import { Box, Typography, Button } from "@mui/material";
import colors from "../utils/colors";


const MainAnnouncement = ({mediaQuery, t}) => {

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
                sx={{flexDirection: (mediaQuery ? 'row' : 'column-reverse')}}
            >
                <Box
                    sx={{
                        width: (mediaQuery ? '45%' : '90%'),
                        margin: (mediaQuery ? "0" : "1rem 0"),
                        alignItems: (mediaQuery ? 'flex-start' : 'center'),
                        textAlign: (mediaQuery ? 'left' : 'center')
                    }}
                    backgroundColor="lightpink"
                    padding="1rem"
                    border="1px solid black"
                    height={(mediaQuery ? '95%' : 'auto')}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <img src={`${process.env.PUBLIC_URL}/img/iconin.png`} alt="NieveIcon" 
                        style={{ width: (mediaQuery ? "30%" : "20%"), height: 'auto', maxWidth: "200px", margin: "1rem 0"}}
                    />
                    <Typography
                        variant="h1"
                        sx={{
                            margin: '0.5rem',
                            fontSize: (mediaQuery ? '2rem' : '1.5rem'),
                            fontWeight: '450'
                        }}
                    >
                        {t('mainAnnouncementTitle')}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            margin: '0.5rem',
                            fontSize: (mediaQuery ? '1.5rem' : '1rem'),
                        }}
                    >
                        {t('mainAnnouncementDescription')}
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            margin: (mediaQuery ? '1.5rem 0' : '0.75rem 0'),
                            backgroundColor: (colors.orangey),
                            color: 'white',
                            fontSize: (mediaQuery ? '1.5rem' : '1rem'),
                            width: '50%',
                            borderRadius: '50px',
                            
                        }}
                        
                    >
                        {t('mainAnnouncementButton')}
                    </Button>
                </Box>

                <Box
                    sx={{
                        width: (mediaQuery ? '45%' : '90%'),
                        margin: (mediaQuery ? "0" : "1rem 0")
                    }}
                    backgroundColor="lightgray"
                    padding="1rem"
                    border="1px solid black"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={`${process.env.PUBLIC_URL}/img/nieve.png`} alt="Nieve" 
                        style={{ width: (mediaQuery ? "70%" : "80%"), height: 'auto', maxWidth: "600px"}}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default MainAnnouncement;