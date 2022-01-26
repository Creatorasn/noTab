import React from "react";
import CodeBackgroundLeft from './../../../../../assets/images/opportunities/__code/code-background-left.jpg';
import CodeBackgroundLeft2x from './../../../../../assets/images/opportunities/__code/code-background-left@2x.jpg';
import CodeBackgroundLeftMobile from './../../../../../assets/images/opportunities/__code/code-background-left-mobile.jpg';
import CodeBackgroundLeftMobile2x from './../../../../../assets/images/opportunities/__code/code-background-left-mobile@2x.jpg';
import CodeBackgroundLeftWebp from './../../../../../assets/images/opportunities/__code/code-background-left.webp';
import CodeBackgroundLeft2xWebp from './../../../../../assets/images/opportunities/__code/code-background-left@2x.webp';
import CodeBackgroundLeftMobileWebp from './../../../../../assets/images/opportunities/__code/code-background-left-mobile.webp';
import CodeBackgroundLeftMobile2xWebp from './../../../../../assets/images/opportunities/__code/code-background-left-mobile@2x.webp';

const PictureCodeBackgroundLeft = () => {
    return (
        <div>
            <picture>
                <source media="(max-width:767px)" 
                        srcSet={`${CodeBackgroundLeftMobileWebp}, ${CodeBackgroundLeftMobile2xWebp} 2x`}
                        type="image/webp" />
                <source media="(max-width:767px)"
                        srcSet={`${CodeBackgroundLeftMobile}, ${CodeBackgroundLeftMobile2x} 2x`} />
                <source srcSet={`${CodeBackgroundLeftWebp}, ${CodeBackgroundLeft2xWebp} 2x`} 
                        type="image/webp" />
                <img className="image" 
                        src={CodeBackgroundLeft} 
                        srcSet={`${CodeBackgroundLeft2x} 2x`}
                        alt="Code Background Left"/>
            </picture>
        </div>
    );
};

export default PictureCodeBackgroundLeft;