import React from 'react';
import OrderingBackground from './../../../../../assets/images/opportunities/__ordering/ordering-background.svg';
import OrderingBackgroundMobile from './../../../../../assets/images/opportunities/__ordering/ordering-background-mobile.svg';

const PictureOrderingBackground = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)"
                        srcSet={OrderingBackgroundMobile} />
                <img className="image" 
                        src={OrderingBackground}
                        alt="OrderingBackground"/>
            </picture>
        </div>
    );
};

export default PictureOrderingBackground;