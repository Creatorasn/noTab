import React from 'react';
import BackgroundRight from './../../../../assets/images/main-block/background-right.svg';
import BackgroundRightMobile from './../../../../assets/images/main-block/background-right-mobile.svg';

const PictureBackgroundRight = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={BackgroundRightMobile} />
                <img className="image" 
                        src={BackgroundRight}
                        alt="background Left"/>
            </picture>
        </div>
    );
};

export default PictureBackgroundRight;