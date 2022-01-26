import React from 'react';
import './main.css';
import Cookies from '../common/cookies/cookies';
import Partner from './__partner/main__partner';
import MainBlock from './__main-block/main__main-block';
import Download from '../common/download/download';
import Opportunities from './__opportunities/main__opportunities';
import BlockNotab from './__block-notab/main__block-notab';

const Main = () => {
    return (
        <main className='main'>
            < MainBlock />
            <div className='main__download-first'>
                < Download />
            </div>
            <div className='main__display'>
                < Cookies />
            </div>
            < Partner />
            < Opportunities />
            < BlockNotab />
            <div className='main__download-last'>
                < Download />
            </div>
        </main>
    );
};

export default Main;