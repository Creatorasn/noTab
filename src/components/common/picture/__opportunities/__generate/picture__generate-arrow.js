import React from 'react';
import GenerateArrow from './../../../../../assets/images/opportunities/__generate/generate-arrow.svg';
import GenerateArrowMobile from './../../../../../assets/images/opportunities/__generate/generate-arrow-mobile.svg';

const PictureGenerateArrow = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={GenerateArrowMobile} />
                <img className="image" 
                        src={GenerateArrow}
                        alt="GenerateArrow"/>
            </picture>
        </div>
    );
};

export default PictureGenerateArrow;