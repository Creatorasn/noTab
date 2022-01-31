import React from 'react';
import Info from '../../../common/info/info';
import PictureMissionBackground from '../../../common/picture/__opportunities/__mission/picture__mission-background';
import PictureMissionIPhoneX from '../../../common/picture/__opportunities/__mission/picture__mission-iPhoneX';
import useOnScreen from '../../../../hooks/main__mission/use-on-screen';
import './main__mission.css'



const Mission = () => {
    const [missionRef, textRef, imgRef] = useOnScreen({ threshold: '0.5' });
    
    return (
        <article className='main__mission mission' ref={missionRef}>
            <div className='mission__container _container'>
                <div className='mission__body'>
                    <div className='mission__text' ref={textRef}>
                        < Info 
                        title={"Our mission and vision"}
                        description={"While technology is our sweet spot, we’ve developed our vision alongside our customers to ensure your everyday problems are solved through simplistic tools. And as your business grows, \n we’ll grow right alongside with you. "} />
                    </div>
                </div>
                <div className='mission__img' ref={imgRef}>
                    < PictureMissionIPhoneX />
                </div>
            </div>
            <div className='mission__background'>
                < PictureMissionBackground />
            </div>
        </article>
    );
};

export default Mission;