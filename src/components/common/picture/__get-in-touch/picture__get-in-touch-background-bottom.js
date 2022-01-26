import React from 'react';
import GetInTouchBackgroundBottom from './../../../../assets/images/get-in-touch/get-in-touch-background-bottom.svg';
import GetInTouchBackgroundBottomMobile from './../../../../assets/images/get-in-touch/get-in-touch-background-bottom-mobile.svg';

const PictureGetInTouchBackgroundBottom = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={GetInTouchBackgroundBottomMobile} />
                <img className="image" 
                        src={GetInTouchBackgroundBottom}
                        alt="Get In Touch Background Bottom"/>
            </picture>
        </div>
    );
};

export default PictureGetInTouchBackgroundBottom;