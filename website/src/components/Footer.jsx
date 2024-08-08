import { Box, Typography, Link, Avatar } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import theme from "../utils/themes";
import colors from "../utils/colors";

const Footer = ({mediaQuery, t, links}) => {
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
        backgroundColor={colors.lightbluey}
        //sx={{padding: (mediaQuery ? '1.5rem' : '1rem')}}
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        >
            <Box
                width="90%"
                //backgroundColor="lightgreen"
                padding="1rem"
                //border="1px solid black"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                flexDirection="column"
            >
                <img src={`${process.env.PUBLIC_URL}/img/logoChico.jpg`} alt="sweetberry logo"
                    style={{width: (mediaQuery ? '30%' : '20%'), height: 'auto', maxWidth: "175px", margin: "1rem 0"}}
                />
                
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="row"
                    margin="0.5rem 0"
                >
                    {Object.keys(links).map((link, index) => {
                            return (
                                <Typography key={index} onClick={() => scrollToSection(links[link].href)}
                                    style={{
                                        margin: '0 1rem',
                                        fontSize: (mediaQuery ? '1.25rem' : '1rem'),
                                        color: "black",
                                        textDecoration: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {t(link)}
                                </Typography>
                            );
                    })}
                </Box>

                <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="row" 
                    margin="0.5rem 0"
                >
                    <LocationOnIcon sx={{fontSize: '2rem', display:(mediaQuery)?"block":"none"}}/>
                    <Link 
                    href="https://www.google.com/maps/place/Sweetberry/@31.8618628,-116.6266942,17z/data=!3m1!4b1!4m6!3m5!1s0x80d89265bfd3eab9:0x286b714907abf8cb!8m2!3d31.8618583!4d-116.6241193!16s%2Fg%2F1tf7gz4f?entry=ttu"
                    underline="none"
                    color="black"
                    textAlign="center"
                    variant={(mediaQuery ? "body1" : "body1P")}
                    >
                        {t('address')}
                    </Link>
                </Box>
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Typography
                        style={{
                            margin: '0.5rem 0',
                            fontSize: (mediaQuery ? '1.25rem' : '1rem'),
                            color: "black",
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        646 111 1111
                    </Typography>
                    <Typography
                        style={{
                            margin: '0.5rem 0',
                            fontSize: (mediaQuery ? '1.25rem' : '1rem'),
                            color: "black",
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Social
                    </Typography>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="row"
                    >
                        <Link href="https://www.facebook.com/sweetberryFY/"
                            margin="0 1rem"
                        >
                            <Avatar
                                sx={{
                                    backgroundColor: colors.bluey,
                                    "&:hover": {
                                        backgroundColor: colors.darkbluey,
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                <FacebookIcon />
                            </Avatar>
                        </Link>
                        <Link href="https://www.instagram.com/sweetberryfy/"
                            margin="0 1rem"
                        >
                            <Avatar
                            sx={{
                                backgroundColor: colors.pinky,
                                "&:hover": {
                                    backgroundColor: colors.darkpinky,
                                    cursor: 'pointer'
                                }
                            }}
                            >
                                <InstagramIcon />
                            </Avatar>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;