
import "@egjs/react-flicking/dist/flicking.css";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Autoplay, Pagination, Navigation, Grid, FreeMode } from 'swiper/modules';
import "./swiperStyle.css";

    const images = [
        {
            name: "Almendra",
            src: `${process.env.PUBLIC_URL}/img/toppings/almendra.jpg`
        },
        {
            name: "Amaranto",
            src: `${process.env.PUBLIC_URL}/img/toppings/amaranto.jpg`
        },
        {
            name: "Blueberries",
            src: `${process.env.PUBLIC_URL}/img/toppings/blueberries.jpg`
        },
        {
            name: "Boba",
            src: `${process.env.PUBLIC_URL}/img/toppings/boba.avif`
        },
        {
            name: "Cajeta",
            src: `${process.env.PUBLIC_URL}/img/toppings/cajeta.jpeg`
        },
        {
            name: "Captain Crunch",
            src: `${process.env.PUBLIC_URL}/img/toppings/captain.jpg`
        },
        {
            name: "Cherry",
            src: `${process.env.PUBLIC_URL}/img/toppings/cherry.jpeg`
        }
    ]

const Slider = () => {

    return (
        <Box
            width="100%"
            height="500px"
            position="relative"
        >
            <Swiper
                loop={true}
                freeMode={true}
                slidesPerView={3}
                grid={{
                    rows: 2,
                }}
                autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                //navigation={true}
                modules={[Autoplay, Pagination, Navigation, Grid, FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>Slid 1</SwiperSlide>
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image.src} alt={image.name} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
        
    )
}

export default Slider;