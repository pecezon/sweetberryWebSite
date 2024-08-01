import { Box } from "@mui/material";
import colors from "../utils/colors";

const QualityIcon = ({ quality, ico }) => {
    return (
        <Box
            width={"150px"}
            maxWidth={"150px"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="1px solid black"
        >
            {ico}
            <h3
                style={{
                    margin: '0.5rem 0',
                    fontWeight: '300',
                    textAlign: 'center',
                    color: (colors.lightdarkgrey)
                }}
            >{quality}</h3>
        </Box>
    );
}

export default QualityIcon;