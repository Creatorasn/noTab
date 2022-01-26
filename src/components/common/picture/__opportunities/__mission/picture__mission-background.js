import React from 'react';
import MissionBackground from './../../../../../assets/images/opportunities/__mission/mission-background.svg';

const PictureMissionBackground = () => {
    return (
        <div>
            <picture>
                <img className="image" 
                        src={MissionBackground}
                        alt="Download App Store"/>
            </picture>
        </div>
    );
};

export default PictureMissionBackground;