import { Box } from '@mui/system';
import theme from '../utils/themes';
import { Typography } from '@mui/material';


const ToppingIcon = ({ topping, mediaQuery, t }) => {
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1rem 0.25rem 0 0.25rem',
            padding: '0',
            width: '30%',
            height: "auto",
            maxWidth: (mediaQuery) ? '175px' : '100px',
            maxHeight: (mediaQuery) ? '175px' : '125px',
        }}
        >
            <img
                src={topping.src}
                alt={topping.name}
                style={{
                    display: "block",
                    width: (mediaQuery) ? '125px' : '75px',
                    height: (mediaQuery) ? '125px' : '75px',
                    objectFit: "cover",
                    borderRadius: "50%",
                }}
            />
            <Typography
                variant={(mediaQuery) ? "body2" : "body2P"}
                margin= '1rem 0'
                textAlign="center"
            >
                {t(topping.name)}
            </Typography>
        </Box>
    );
}

export default ToppingIcon;