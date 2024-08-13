import { Box, Typography } from '@mui/material';
import Slider from '../widgets/Slider';
import { useState, useRef } from 'react';
import colors from '../utils/colors';
import ToppingIcon from '../widgets/ToppingIcon';

import React, { forwardRef } from 'react';

const toppings = [
    {
        name: "Almendra",
        src: `${process.env.PUBLIC_URL}/img/toppings/almendra.jpg`,
        tipo: "Frutos Secos"
    },
    {
        name: "Amaranto",
        src: `${process.env.PUBLIC_URL}/img/toppings/amaranto.jpg`,
        tipo: "Frutos Secos"
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
        tipo: "Galletas y Cereales"
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
        tipo: "Frutos Secos"
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
        tipo: "Galletas y Cereales"
    },
    {
        name: "Gomitas de Osito",
        src: `${process.env.PUBLIC_URL}/img/toppings/gomitas.jpg`,
        tipo: "Dulces y Otros"
    },
    {
        name: "Granola",
        src: `${process.env.PUBLIC_URL}/img/toppings/granola.jpg`,
        tipo: "Frutos Secos"
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
        name: "Mango",
        src: `${process.env.PUBLIC_URL}/img/toppings/mango.jpeg`,
        tipo: "Frutas"
    },
    {
        name: "Miel",
        src: `${process.env.PUBLIC_URL}/img/toppings/miel.jpeg`,
        tipo: "Liquidos"
    },
    {
        name: "M&M",
        src: `${process.env.PUBLIC_URL}/img/toppings/mms.jpeg`,
        tipo: "Chocolates"
    },
    {
        name: "Nuez",
        src: `${process.env.PUBLIC_URL}/img/toppings/nuez.jpeg`,
        tipo: "Frutos Secos"
    },
    {
        name: "Oreo",
        src: `${process.env.PUBLIC_URL}/img/toppings/oreo.jpeg`,
        tipo: "Galletas y Cereales"
    },
    {
        name: "Pineapple",
        src: `${process.env.PUBLIC_URL}/img/toppings/pineapple.jpg`,
        tipo: "Frutas"
    },
    {
        name: "Reeses",
        src: `${process.env.PUBLIC_URL}/img/toppings/reeses.jpeg`,
        tipo: "Chocolates"
    },
    {
        name: "Rielitos",
        src: `${process.env.PUBLIC_URL}/img/toppings/rielitos.jpg`,
        tipo: "Duces y Otros"
    },
    {
        name: "Yogurt Chips",
        src: `${process.env.PUBLIC_URL}/img/toppings/yoguertchips.jpg`,
        tipo: "Chocolates"
    }
]

const Toppings = forwardRef((props, ref) => {

    const {mediaQuery, t} = props;

    const [selectedType, setSelectedType] = useState("Todos");

    const handleType = (type) => {
        setSelectedType(type);
    }

    return (
        <Box
            width="100%"
            display="flex"
            backgroundColor={colors.fadedgreeny}
            //margin="1rem"
            //sx={{padding: (mediaQuery ? '1.5rem' : '1rem')}}
            //border="1px solid black"
            justifyContent="center"
            ref={ref}
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
                <Typography
                    variant={(mediaQuery ? "h2" : "h2P")}
                    margin="1rem 0"
                >Toppings</Typography>
                <Typography
                    variant="body1"
                    textAlign="center"
                    marginBottom="1rem"
                >Elige entre los mas de 40 toppings que podemos ofrecerte, sabias que puedes 450,000 combinaciones de toppings</Typography>

                <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Typography
                        onClick={() => handleType("Todos")}
                        sx={{cursor:"pointer"}}
                        variant="h5"
                        fontSize={mediaQuery ? "1rem" : "0.75rem"}
                        backgroundColor={selectedType === "Todos" ? colors.lightbluey : "white"}
                        padding={mediaQuery ? "0.5rem 2rem" : "0.4rem 1rem"}
                        margin={mediaQuery ? "0.5rem" : "0.25rem"}
                        border="1px solid black"
                        borderRadius="50px"
                        textAlign="center"
                    >{t("Todos")}</Typography>
                    <Typography
                        onClick={() => handleType("Frutas")}
                        sx={{cursor:"pointer"}}
                        variant="h5"
                        fontSize={mediaQuery ? "1rem" : "0.75rem"}
                        backgroundColor={selectedType === "Frutas" ? colors.lightbluey : "white"}
                        padding={mediaQuery ? "0.5rem 2rem" : "0.4rem 1rem"}
                        margin={mediaQuery ? "0.5rem" : "0.25rem"}
                        border="1px solid black"
                        borderRadius="50px"
                        textAlign="center"
                    >{t("Frutas")}</Typography>
                    <Typography
                        onClick={() => handleType("Frutos Secos")}
                        sx={{cursor:"pointer"}}
                        variant="h5"
                        fontSize={mediaQuery ? "1rem" : "0.75rem"}
                        backgroundColor={selectedType === "Frutos Secos" ? colors.lightbluey : "white"}
                        padding={mediaQuery ? "0.5rem 2rem" : "0.4rem 1rem"}
                        margin={mediaQuery ? "0.5rem" : "0.25rem"}
                        border="1px solid black"
                        borderRadius="50px"
                        textAlign="center"
                    >{t("Frutos Secos")}</Typography>
                    <Typography
                        onClick={() => handleType("Chocolates")}
                        sx={{cursor:"pointer"}}
                        variant="h5"
                        fontSize={mediaQuery ? "1rem" : "0.75rem"}
                        backgroundColor={selectedType === "Chocolates" ? colors.lightbluey : "white"}
                        padding={mediaQuery ? "0.5rem 2rem" : "0.4rem 1rem"}
                        margin={mediaQuery ? "0.5rem" : "0.25rem"}
                        border="1px solid black"
                        borderRadius="50px"
                        textAlign="center"
                    >{("Chocolates")}</Typography>
                    <Typography
                        onClick={() => handleType("Galletas y Cereales")}
                        sx={{cursor:"pointer"}}
                        variant="h5"
                        fontSize={mediaQuery ? "1rem" : "0.75rem"}
                        backgroundColor={selectedType === "Galletas y Cereales" ? colors.lightbluey : "white"}
                        padding={mediaQuery ? "0.5rem 2rem" : "0.4rem 1rem"}
                        margin={mediaQuery ? "0.5rem" : "0.25rem"}
                        border="1px solid black"
                        borderRadius="50px"
                        textAlign="center"
                    >{("Galletas y Cereales")}</Typography>
                    <Typography
                        onClick={() => handleType("Liquidos")}
                        sx={{cursor:"pointer"}}
                        variant="h5"
                        fontSize={mediaQuery ? "1rem" : "0.75rem"}
                        backgroundColor={selectedType === "Liquidos" ? colors.lightbluey : "white"}
                        padding={mediaQuery ? "0.5rem 2rem" : "0.4rem 1rem"}
                        margin={mediaQuery ? "0.5rem" : "0.25rem"}
                        border="1px solid black"
                        borderRadius="50px"
                        textAlign="center"
                    >{t("Liquidos")}</Typography>
                    <Typography
                        onClick={() => handleType("Dulces y Otros")}
                        sx={{cursor:"pointer"}}
                        variant="h5"
                        fontSize={mediaQuery ? "1rem" : "0.75rem"}
                        backgroundColor={selectedType === "Dulces y Otros" ? colors.lightbluey : "white"}
                        padding={mediaQuery ? "0.5rem 2rem" : "0.4rem 1rem"}
                        margin={mediaQuery ? "0.5rem" : "0.25rem"}
                        border="1px solid black"
                        borderRadius="50px"
                        textAlign="center"
                    >{t("Dulces y Otros")}</Typography>

                    

                </Box>

                <Box
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    {
                        toppings.map((topping, index) => {
                            if(topping.tipo === selectedType || selectedType === "Todos"){
                                return (
                                    <ToppingIcon
                                        key={index}
                                        topping={topping}
                                        mediaQuery={mediaQuery}
                                        t={t}
                                    >

                                    </ToppingIcon>
                                )
                            }
                        })
                    }
                </Box>
               
            </Box>
        </Box>
    );
})

export default Toppings;