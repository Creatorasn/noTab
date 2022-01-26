import React from "react";
import IphoneX from './../../../../assets/images/main-block/iphone-x.png';
import IphoneX2x from './../../../../assets/images/main-block/iphone-x@2x.png';
import IphoneXMobile from './../../../../assets/images/main-block/iphone-x-mobile.png';
import IphoneXMobile2x from './../../../../assets/images/main-block/iphone-x-mobile@2x.png';
import IphoneXWebp from './../../../../assets/images/main-block/iphone-x.webp';
import IphoneX2xWebp from './../../../../assets/images/main-block/iphone-x@2x.webp';
import IphoneXMobileWebp from './../../../../assets/images/main-block/iphone-x-mobile.webp';
import IphoneXMobile2xWebp from './../../../../assets/images/main-block/iphone-x-mobile@2x.webp';

const PictureIphoneX = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:992px)" 
                        srcSet={`${IphoneXMobileWebp}, ${IphoneXMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:992px)"
                        srcSet={`${IphoneXMobile}, ${IphoneXMobile2x} 2x`} />
                <source srcSet={`${IphoneXWebp}, ${IphoneX2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={IphoneX} 
                        srcSet={`${IphoneX2x} 2x`}
                        alt="Iphone X"/>
            </picture>
        </div>
    );
};

export default PictureIphoneX;