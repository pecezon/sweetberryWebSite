import { Typography, Box, Switch, Link, Button } from "@mui/material";
import colors from "../utils/colors";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Nav = ({mediaQuery, changeLanguage, language, links, t}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLanguageChange = () => {
        if (language === 'es') {
            changeLanguage('en');
        }else{
            changeLanguage('es');
        }
    }

    return (
        <>
            <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                position="relative"
                zIndex="0"
            >
                <Box
                    display="flex"
                    justifyContent="left"
                    flexWrap="wrap"
                    sx={{width: (mediaQuery ? '25%' : '40%')}}
                    marginLeft={mediaQuery ? '0' : '1rem'}
                >
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" 
                        style={{ width: '100%', height: 'auto', maxWidth: "300px"}} 
                    />
                </Box>

                
                    <Box
                        //border="2px solid black"
                        padding="1rem"
                        //borderRadius="50px"
                        width="25%"
                        height="100%"
                        justifyContent="center"
                        sx={{display: (mediaQuery ? 'flex' : 'none')}}
                    >
                        {Object.keys(links).map((link, index) => {
                            return (
                                <Link key={index} href={links[link]} underline="none"
                                    style={{
                                        margin: '0 1rem',
                                        fontSize: '1.25rem',
                                        color: "black",
                                        textDecoration: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {t(link)}
                                </Link>
                            );
                        })}
                    </Box>
                    
            
                
                <Box
                    display="flex"
                    justifyContent="right"
                    alignItems="center"
                    sx={{width: (mediaQuery ? '25%' : '35%')}}
                    marginLeft={mediaQuery ? '0' : '1rem'}
                >
                    {
                        /**
                         * 
                         * <Typography
                                style={{marginRight: '0.5rem', fontSize: (mediaQuery ? '1.5rem' : '1rem')}}
                            >
                                Esp
                            </Typography>
                            <Switch 
                                checked={language === 'en'}
                                onChange={handleLanguageChange}
                                color="success"
                            />
                            <Typography 
                                style={{margin: '0 1rem 0 0.5rem', fontSize: (mediaQuery ? '1.5rem' : '1rem')}}
                            >
                                Eng
                            </Typography>
                         */
                    }

                    <Button
                        
                        variant="contained"
                        onClick={handleLanguageChange}
                        sx={{
                            margin: (mediaQuery ? '0 1rem 0 0.5rem' : '0 0.5rem 0 0.5rem'),
                            backgroundColor: colors.bluey,
                            fontSize: (mediaQuery ? '1rem' : '0.75rem')
                        }}
                    >
                        {t("language")}
                    </Button>
                    
                </Box>

                <Box
                    display={mediaQuery ? 'none' : 'flex'}
                >
                    <IconButton onClick={handleIsMenuOpen} marginLeft= '1rem' color="black" fontSize="1.5rem">
                            <MenuIcon />
                    </IconButton>
                </Box>

                

            </Box>

            {isMenuOpen && (
                <Box
                position="fixed"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bgcolor="white"
                zIndex="10"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                >
                <IconButton onClick={handleIsMenuOpen} sx={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    <CloseIcon />
                </IconButton>

                {Object.keys(links).map((link, index) => (
                    <Link key={index} href={links[link]["href"]} underline="none"
                    style={{
                        margin: '1rem 0',
                        fontSize: '1.5rem',
                        color: "black",
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}
                    onClick={handleIsMenuOpen}
                    >
                        {t(link)}
                    </Link>
                ))}
                </Box>
            )}

        </>
    );
}

export default Nav;