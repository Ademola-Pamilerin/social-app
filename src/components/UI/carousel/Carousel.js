import React from 'react'
import Image from '../../../asset/2.jpg';
import Image2 from '../../../asset/10.jpg';
import Images3 from '../../../asset/gift.png';
import Carousel from 'react-material-ui-carousel';
import classes from './carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Pagination, Navigation, Keyboard } from 'swiper'


import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const data = [
    { type: "image", path: Image },
    { type: "image", path: Image2 },
    { type: "image", path: Images3 },
    { type: "image", path: Image },
    { type: "image", path: Image2 },
    { type: "image", path: Images3 },
    { type: "image", path: Image },
]


export const CarouselComponent = (props) => {
    return (
        <Swiper
            autoplay={props.loop ? true : false}
            modules={[Scrollbar, Pagination, Navigation, Keyboard]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            keyboard={{ onlyInViewport: true }}
            loop={props.loop ? true : false}
        >

            {data.map((el, i) => (
                <SwiperSlide key={i}>
                    <img alt={"Ademola"} key={i} src={el.path} style={{
                        height: "100%",
                        width: "100%"
                    }} />
                </SwiperSlide>))}
            {/* {
                data.map((item, i) => <Item key={i} item={item} />)
            } */}
        </Swiper>
    )
}