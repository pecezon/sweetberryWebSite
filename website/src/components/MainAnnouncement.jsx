import { Box, Typography, Button } from "@mui/material";
import colors from "../utils/colors";


const MainAnnouncement = ({mediaQuery, t, flavorsRef}) => {

    const scrollToSection = (elementRef) => {
        if (elementRef && elementRef.current) {
            elementRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }else{
            console.log('Pendejo');
        }
    };

    return (
        <Box
            width="100%"
            display="flex"
            backgroundColor={colors.fadedgreeny}
            //margin="1rem"
            //sx={{padding: (mediaQuery ? '1.5rem' : '1rem')}}
            //border="1px solid black"
            justifyContent="center"
            marginTop={(mediaQuery ? '100px' : '65px')}
        >
            <Box
                width="90%"
                //backgroundColor="lightgreen"
                padding="1rem"
                //border="1px solid black"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                sx={{flexDirection: 'column-reverse'}}
            >
                <Box
                    sx={{
                        width: (mediaQuery ? '45%' : '90%'),
                        margin: (mediaQuery ? "0" : "1rem 0"),
                        alignItems: "center",
                        textAlign: 'center'
                    }}
                    //backgroundColor="lightpink"
                    padding="1rem"
                    //border="1px solid black"
                    height={(mediaQuery ? '95%' : 'auto')}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Typography
                        variant={(mediaQuery ? 'special' : 'specialPhone')}
                        sx={{
                            margin: '0.5rem'
                        }}
                    >
                        {t('mainAnnouncementTitle')}
                    </Typography>
                    <Typography
                        variant={(mediaQuery ? 'h3' : 'h3P')}
                        sx={{
                            margin: '0.5rem',
                        }}
                    >
                        {t('mainAnnouncementDescription')}
                    </Typography>
                    <Typography
                        variant={(mediaQuery ? 'body1' : 'body1P')}
                        onClick={() => scrollToSection(flavorsRef)}
                        sx={{
                            margin: (mediaQuery ? '1.5rem 0' : '0.75rem 0'),
                            backgroundColor: (colors.darkgreeny),
                            width: '50%',
                            padding: '0.5rem 0',
                            borderRadius: '15px',
                            "&:hover": {
                                backgroundColor: colors.greeny,
                                cursor: 'pointer'
                            }
                            
                        }}
                        
                    >
                        {t('mainAnnouncementButton')}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: "90%",
                        margin: (mediaQuery ? "0" : "1rem 0")
                    }}
                    //backgroundColor="lightgray"
                    //border="1px solid black"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={(mediaQuery) ? `${process.env.PUBLIC_URL}/img/big3.png` : `${process.env.PUBLIC_URL}/img/big3P.png`} alt="Nieve" 
                        style={{ 
                            width: (mediaQuery ? "70%" : "100%"),
                            maxWidth: "400px", 
                            height: 'auto'
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default MainAnnouncement;