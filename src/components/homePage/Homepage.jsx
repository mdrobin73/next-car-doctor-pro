import React from 'react';
import Banner from './Banner';
import About from './About';
import Service from './Services';

const homepage = () => {
    return (
        <div className=''>

            <Banner></Banner>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default homepage;