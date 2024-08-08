import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Box } from '@mui/material';
import ReviewCard from './ReviewCard';
import reviews from '../utils/reviews';


import 'swiper/css';
import 'swiper/css/effect-cards';



const CardSlider = ({language, mediaQuery}) => {
  return (
    <>
      <Swiper
        loop
        style={{
            "height": "500px",
            "width": "200px",
            "margin": "0",
            "padding": "0.25rem 0",
        }}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
            reviews[language]["reviews"].map((review, index) => {
                return(
                    <SwiperSlide key={index}
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "justifyContent": "center",
                            "borderRadius": "18px",
                            "padding": "0.5rem 0",
                        }}
                    >
                            <ReviewCard review={review} mediaQuery={mediaQuery}></ReviewCard>
                    </SwiperSlide>
                )
                        
            })
        }
      </Swiper>
    </>
  );
}

export default CardSlider;
