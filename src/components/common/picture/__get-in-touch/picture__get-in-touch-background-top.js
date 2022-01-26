import React from 'react';
import GetInTouchBackgroundTop from './../../../../assets/images/get-in-touch/get-in-touch-background-top.svg';
import GetInTouchBackgroundTopMobile from './../../../../assets/images/get-in-touch/get-in-touch-background-top-mobile.svg';

const PictureGetInTouchBackgroundTop = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={GetInTouchBackgroundTopMobile} />
                <img className="image" 
                        src={GetInTouchBackgroundTop}
                        alt="Get In Touch Background Top"/>
            </picture>
        </div>
    );
};

export default PictureGetInTouchBackgroundTop;