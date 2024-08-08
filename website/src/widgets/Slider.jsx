
import "@egjs/react-flicking/dist/flicking.css";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import "./swiperStyle.css";
import reviews from "../utils/reviews";
import ReviewCard from "./ReviewCard";



const Slider = ({language}) => {

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
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation, FreeMode]}
                className="mySwiper"
            >
                
                {
                    reviews[language]["reviews"].map((review, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    width="90%"
                                    height="90%"
                                    maxWidth="450px"
                                    padding="1rem"
                                >
                                    <ReviewCard review={review}></ReviewCard>
                                </Box>
                            </SwiperSlide>
                        )
                        
                    })
                }
            </Swiper>
        </Box>
        
    )
}

export default Slider;