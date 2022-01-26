import React from 'react';
import GenerateBackground from './../../../../../assets/images/opportunities/__generate/generate-background.svg';
import GenerateBackgroundMobile from './../../../../../assets/images/opportunities/__generate/generate-background-mobile.svg';

const PictureGenerateBackground = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={GenerateBackgroundMobile} />
                <img className="image" 
                        src={GenerateBackground}
                        alt="GenerateBackground" width="100%" />
            </picture>
        </div>
    );
};

export default PictureGenerateBackground;