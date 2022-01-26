import React from 'react';
import LogoNotab from './../../../../assets/images/header/logo-notab.png';
import LogoNotab2x from './../../../../assets/images/header/logo-notab@2x.png';
import LogoNotabMobile from './../../../../assets/images/header/logo-notab-mobile.png';
import LogoNotabMobile2x from './../../../../assets/images/header/logo-notab-mobile@2x.png';
import LogoNotabWebp from './../../../../assets/images/header/logo-notab.webp';
import LogoNotab2xWebp from './../../../../assets/images/header/logo-notab@2x.webp';
import LogoNotabMobileWebp from './../../../../assets/images/header/logo-notab-mobile.webp';
import LogoNotabMobile2xWebp from './../../../../assets/images/header/logo-notab-mobile@2x.webp';

const PictureLogoNotab = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${LogoNotabMobileWebp}, ${LogoNotabMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${LogoNotabMobile}, ${LogoNotabMobile2x} 2x`} />
                <source srcSet={`${LogoNotabWebp}, ${LogoNotab2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={LogoNotab} 
                        srcSet={`${LogoNotab2x} 2x`}
                        alt="Logo NoTab" />
            </picture>
        </div>
    );
};

export default PictureLogoNotab;