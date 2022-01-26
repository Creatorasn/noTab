import React from "react";
import MissionIPhoneX from './../../../../../assets/images/opportunities/__mission/mission-iPhoneX.png';
import MissionIPhoneX2x from './../../../../../assets/images/opportunities/__mission/mission-iPhoneX@2x.png';
import MissionIPhoneXMobile from './../../../../../assets/images/opportunities/__mission/mission-iPhoneX-mobile.png';
import MissionIPhoneXMobile2x from './../../../../../assets/images/opportunities/__mission/mission-iPhoneX-mobile@2x.png';
import MissionIPhoneXWebp from './../../../../../assets/images/opportunities/__mission/mission-iPhoneX.webp';
import MissionIPhoneX2xWebp from './../../../../../assets/images/opportunities/__mission/mission-iPhoneX@2x.webp';
import MissionIPhoneXMobileWebp from './../../../../../assets/images/opportunities/__mission/mission-iPhoneX-mobile.webp';
import MissionIPhoneXMobile2xWebp from './../../../../../assets/images/opportunities/__mission/mission-iPhoneX-mobile@2x.webp';

const PictureMissionIPhoneX = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${MissionIPhoneXMobileWebp}, ${MissionIPhoneXMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${MissionIPhoneXMobile}, ${MissionIPhoneXMobile2x} 2x`} />
                <source srcSet={`${MissionIPhoneXWebp}, ${MissionIPhoneX2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={MissionIPhoneX} 
                        srcSet={`${MissionIPhoneX2x} 2x`}
                        alt="Code Background Left"/>
            </picture>
        </div>
    );
};

export default PictureMissionIPhoneX;