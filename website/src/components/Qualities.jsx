import { Box, Typography } from "@mui/material";
import colors from "../utils/colors";
import QualityIcon from "../widgets/QualityIcon";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const Qualities = ({mediaQuery, t}) => {

    return(
        <Box
            width="100%"
            display="flex"
            backgroundColor={colors.fadedbluey}
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
                alignItems="flex-start"
                flexWrap="wrap"
            >
                <QualityIcon mediaQuery={mediaQuery} quality={t('fastDelivery')} ico={<BoltOutlinedIcon sx={{fontSize: "40px", m: "0.5rem", color: (colors.lightdarkgrey)}}></BoltOutlinedIcon>}></QualityIcon>
                <QualityIcon mediaQuery={mediaQuery} quality={t('flavorVariety')} ico={<IcecreamOutlinedIcon sx={{fontSize: "40px", m: "0.5rem", color: (colors.lightdarkgrey)}}></IcecreamOutlinedIcon>}></QualityIcon>
                <QualityIcon mediaQuery={mediaQuery} quality={t('freshIngredients')} ico={<DeviceThermostatOutlinedIcon sx={{fontSize: "40px", m: "0.5rem", color: (colors.lightdarkgrey)}}></DeviceThermostatOutlinedIcon>}></QualityIcon>
                <QualityIcon mediaQuery={mediaQuery} quality={t('customerService')} ico={<SupportAgentOutlinedIcon sx={{fontSize: "40px", m: "0.5rem", color: (colors.lightdarkgrey)}}></SupportAgentOutlinedIcon>}></QualityIcon>
                <QualityIcon mediaQuery={mediaQuery} quality={t('cozyAtmosphere')} ico={<StorefrontOutlinedIcon sx={{fontSize: "40px", m: "0.5rem", color: (colors.lightdarkgrey)}}></StorefrontOutlinedIcon>}></QualityIcon>
            </Box>
        </Box>
    )
}

export default Qualities;