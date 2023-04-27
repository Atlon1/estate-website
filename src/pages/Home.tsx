import React from 'react';

import Banner from "../components/Banner";
import HauseList from "../components/HauseList";


const Home = () => {
    return (
        <div className='min-h-[1800px]'>
            <Banner/>
            <HauseList/>
        </div>
    );
};

export default Home;