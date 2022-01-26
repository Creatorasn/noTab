import React from "react";
import GenerateIPhone from './../../../../../assets/images/opportunities/__generate/generate-iPhone.png';
import GenerateIPhone2x from './../../../../../assets/images/opportunities/__generate/generate-iPhone@2x.png';
import GenerateIPhoneMobile from './../../../../../assets/images/opportunities/__generate/generate-iPhone-mobile.png';
import GenerateIPhoneMobile2x from './../../../../../assets/images/opportunities/__generate/generate-iPhone-mobile@2x.png';
import GenerateIPhoneWebp from './../../../../../assets/images/opportunities/__generate/generate-iPhone.webp';
import GenerateIPhone2xWebp from './../../../../../assets/images/opportunities/__generate/generate-iPhone@2x.webp';
import GenerateIPhoneMobileWebp from './../../../../../assets/images/opportunities/__generate/generate-iPhone-mobile.webp';
import GenerateIPhoneMobile2xWebp from './../../../../../assets/images/opportunities/__generate/generate-iPhone-mobile@2x.webp';

const PictureGenerateIPhone = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${GenerateIPhoneMobileWebp}, ${GenerateIPhoneMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${GenerateIPhoneMobile}, ${GenerateIPhoneMobile2x} 2x`} />
                <source srcSet={`${GenerateIPhoneWebp}, ${GenerateIPhone2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={GenerateIPhone} 
                        srcSet={`${GenerateIPhone2x} 2x`}
                        alt="Generate IPhone"/>
            </picture>
        </div>
    );
};

export default PictureGenerateIPhone;