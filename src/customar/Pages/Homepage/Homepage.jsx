import React from 'react';
import Main_Carousel from '../../components/HomeCarosel/Main_Carosel';
import HomeSectionCarosal from '../../components/HomesectionCarosal/HomeSectionCarosal';
import { Menskurta } from '../../Data/MensKurta';
import Foter from '../../components/Foter/Footer';
const Homepage = () => {
    return (
        <div>
            <Main_Carousel/>

            <div>
                <HomeSectionCarosal data={Menskurta} sectionName={"Mens_kurta"}/>
                <HomeSectionCarosal data={Menskurta} sectionName={"Mens_kurta"}/>
                <HomeSectionCarosal data={Menskurta} sectionName={"Mens_kurta"}/>
                <HomeSectionCarosal data={Menskurta} sectionName={"Mens_kurta"}/>
                <HomeSectionCarosal data={Menskurta} sectionName={"Mens_kurta"}/>

            </div>

            <div>
                <Foter/>
            </div>
        </div>
    );
}

export default Homepage;
