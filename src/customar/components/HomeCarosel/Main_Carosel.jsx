import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import 'react-alice-carousel/lib/alice-carousel.css';
import { Main_Carousel_Data } from './Main_Carosel_Data';

const Main_Carousel = () => {
    const items = Main_Carousel_Data.map((item) => 
        <img className='cursor-pointer' role='presentation' src={item.imageUrl} alt='Not_FOUND' />
    );

    return (
        <AliceCarousel
      
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableDotsControls
    />
    );
};

export default Main_Carousel;
