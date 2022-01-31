import React from 'react';
import Partner from './__partner/main__partner';
import MainBlock from './__main-block/main__main-block';
import Download from '../common/download/download';
import Opportunities from './__opportunities/main__opportunities';
import BlockNotab from './__block-notab/main__block-notab';
import GetInTouch from './__get-in-touch/main__get-in-touch';

const Main = () => {
    return (
        <main className='main'>
            < MainBlock />
            <div className='main__download-first'>
                < Download />
            </div>
            < Partner />
            < Opportunities />
            < BlockNotab />
            < GetInTouch />
            <div className='main__download-last'>
                < Download />
            </div>
        </main>
    );
};

export default Main;