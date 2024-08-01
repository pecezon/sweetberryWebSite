import { Box, Typography } from '@mui/material';
import Slider from '../widgets/Slider';

const toppings = [
    {
        name: "Almendra",
        src: `${process.env.PUBLIC_URL}/img/toppings/almendra.jpg`,
        tipo: "FrutosSecos"
    },
    {
        name: "Amaranto",
        src: `${process.env.PUBLIC_URL}/img/toppings/amaranto.jpg`,
        tipo: "FrutosSecos"
    },
    {
        name: "Blueberries",
        src: `${process.env.PUBLIC_URL}/img/toppings/blueberries.jpg`,
        tipo: "Frutas"
    },
    {
        name: "Boba",
        src: `${process.env.PUBLIC_URL}/img/toppings/boba.avif`,
        tipo: "Dulces y Otros"
    },
    {
        name: "Cajeta",
        src: `${process.env.PUBLIC_URL}/img/toppings/cajeta.jpeg`,
        tipo: "Liquidos"
    },
    {
        name: "Captain Crunch",
        src: `${process.env.PUBLIC_URL}/img/toppings/captain.jpg`,
        tipo: "Cereales"
    },
    {
        name: "Cherry",
        src: `${process.env.PUBLIC_URL}/img/toppings/cherry.jpeg`,
        tipo: "Frutas"
    },
    {
        name: "Chispas de Chocolate",
        src: `${process.env.PUBLIC_URL}/img/toppings/chips.jpeg`,
        tipo: "Chocolates"
    },
    {
        name: "Chocolate Liquido",
        src: `${process.env.PUBLIC_URL}/img/toppings/chocolate.jpeg`,
        tipo: "Liquidos"
    },
    {
        name: "Chocoretas",
        src: `${process.env.PUBLIC_URL}/img/toppings/chocoretas.jpg`,
        tipo: "Chocolates"
    },
    {
        name: "Coco",
        src: `${process.env.PUBLIC_URL}/img/toppings/coco.jpg`,
        tipo: "FrutosSecos"
    },
    {
        name: "Frambuesa",
        src: `${process.env.PUBLIC_URL}/img/toppings/frambuesas.jpg`,
        tipo: "Frutas"
    },
    {
        name: "Fresa",
        src: `${process.env.PUBLIC_URL}/img/toppings/fresa.jpg`,
        tipo: "Frutas"
    },
    {
        name: "Fruit Pebbles",
        src: `${process.env.PUBLIC_URL}/img/toppings/fruitPebbles.jpg`,
        tipo: "Cereales"
    },
    {
        name: "Gomitas de Osito",
        src: `${process.env.PUBLIC_URL}/img/toppings/gomitas.jpg`,
        tipo: "Dulces y Otros"
    },
    {
        name: "Granola",
        src: `${process.env.PUBLIC_URL}/img/toppings/granola.jpg`,
        tipo: "FrutosSecos"
    },
    {
        name: "Kiwi",
        src: `${process.env.PUBLIC_URL}/img/toppings/kiwi.jpeg`,
        tipo: "Frutas"
    },
    {
        name: "Lechera",
        src: `${process.env.PUBLIC_URL}/img/toppings/lechera.webp`,
        tipo: "Liquidos"
    },
    {
        name: ""
    }
    
    
]

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
                flexDirection="column"
            >
                <Typography
                    variant="h3"
                >Toppings a elegir</Typography>
                <Typography
                    variant="body1"
                    sx={{m: "01rem"}}
                >Elige entre los mas de 40 toppings que podemos ofrecerte, sabias que puedes 450,000 combinaciones de toppings</Typography>

                <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography
                        onClick={() => console.log("Nuts")}
                    >Frutas</Typography>
                </Box>
               
            </Box>
        </Box>
    );
}

export default Toppings;