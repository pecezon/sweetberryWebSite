import { Box, Typography } from "@mui/material";
import colors from "../utils/colors";
import theme from "../utils/themes";

const QualityIcon = ({ quality, ico, mediaQuery }) => {
    return (
        <Box
            width={"90px"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin="1rem 0.1rem"
        >
            {ico}
            <Typography
                variant={mediaQuery ? "body1" : "body1P"}
                sx={{
                    textAlign: "center",
                }}
            >{quality}</Typography>
        </Box>
    );
}

export default QualityIcon;