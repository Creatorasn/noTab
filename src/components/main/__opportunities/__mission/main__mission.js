import React from 'react';
import Info from '../../../common/info/info';
import PictureMissionBackground from '../../../common/picture/__opportunities/__mission/picture__mission-background';
import PictureMissionIPhoneX from '../../../common/picture/__opportunities/__mission/picture__mission-iPhoneX';
import './main__mission.css'

const Mission = () => {
    return (
        <article className='main__mission mission'>
            <div className='mission__container _container'>
                <div className='mission__body'>
                    <div className='mission__text'>
                        < Info 
                        title={"Our mission and vision"}
                        description={"While technology is our sweet spot, we’ve developed our vision alongside our customers to ensure your everyday problems are solved through simplistic tools. And as your business grows, \n we’ll grow right alongside with you. "} />
                    </div>
                </div>
            </div>
            <div className='mission__img'>
                        < PictureMissionIPhoneX />
                    </div>
            <div className='mission__background'>
                < PictureMissionBackground />
            </div>
        </article>
    );
};

export default Mission;