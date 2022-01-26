import React from 'react';
import GenerateIPhoneBackground from './../../../../../assets/images/opportunities/__generate/generate-iPhone-background.svg';
import GenerateIPhoneBackgroundMobile from './../../../../../assets/images/opportunities/__generate/generate-iPhone-background-mobile.svg';

const PictureGenerateIPhoneBackground = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={GenerateIPhoneBackgroundMobile} />
                <img className="image" 
                        src={GenerateIPhoneBackground}
                        alt="GenerateIPhoneBackground" />
            </picture>
        </div>
    );
};

export default PictureGenerateIPhoneBackground;