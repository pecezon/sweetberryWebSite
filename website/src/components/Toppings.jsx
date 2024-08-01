import { Box } from '@mui/system';
import Slider from '../widgets/Slider';

const Toppings = ({mediaQuery}) => {
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
                <Slider></Slider>
            </Box>
        </Box>
    );
}

export default Toppings;