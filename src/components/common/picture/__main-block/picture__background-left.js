import React from 'react';
import BackgroundLeft from './../../../../assets/images/main-block/background-left.svg';
import BackgroundLeftMobile from './../../../../assets/images/main-block/background-left-mobile.svg';

const PictureBackgroundLeft = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={BackgroundLeftMobile} />
                <img className="image" 
                        src={BackgroundLeft}
                        alt="background Left"/>
            </picture>
        </div>
    );
};

export default PictureBackgroundLeft;